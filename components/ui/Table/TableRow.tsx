import { useRouter } from "next/router";
import { useState } from "react";
import ThreeDots from "../Icon/ThreeDots";
import useSWR, { useSWRConfig } from "swr";

type JobApp = {
  _id: string;
  logo: string;
  jobTitle: string;
  updatedDate: Date;
  companyName: string;
  dateSaved: string;
  favorite: boolean;
  status: [{ name: string; status: string }];
  favoriteHandler: (id: string, favorite: boolean) => void;
  deleteHandler: (id: string) => void;
  rejectedHandler: (id: string) => void;
};

const statusColor = {
  Applied: "bg-status-100",
  "Interview 1": "bg-status-200",
  "Take Home": "bg-status-300",
  "Interview 2": "bg-status-400",
  Offered: "bg-status-500",
  Accepted: "bg-status-600",
  Rejected: "bg-status-700",
};

const TableRow = (props: JobApp) => {
  const { mutate } = useSWRConfig();

  const router = useRouter();
  const [settingButton, setSettingButton] = useState(false);
  // console.log(
  //   Math.round((+new Date() - +new Date(props.updatedDate)) / 3600000)
  // );

  const onClickHandler = (id: string) => {
    router.push({ pathname: `/jobdetail/[appID]`, query: { appID: id } });
  };

  const EditDropDownHandler = () => {
    setSettingButton((prevState) => !prevState);
  };

  //get current active status and color corresponding to the status
  let appStatus = { name: "", color: "" };
  props.status.find((post: { status: string; name: string }, index: number) => {
    if (
      post.status === "Rejected" ||
      post.status === "Active" ||
      (post.status === "Completed" && post.name === "Accepted")
    ) {
      if (post.status === "Rejected") {
        appStatus = {
          name: post.status,
          color: statusColor[post.status as keyof typeof statusColor],
        };
      } else {
        appStatus = {
          name: post.name,
          color: statusColor[post.name as keyof typeof statusColor],
        };
      }
    }
  });

  let lastUpdated =
    "Last updated " +
    Math.round((+new Date() - +new Date(props.updatedDate)) / 3600000) +
    " hours ago";

  return (
    <tr id={props._id}>
      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-full" src={props.logo} alt="" />
          </div>

          <div className="ml-4">
            <div
              className="text-sm leading-5 font-medium text-prussblue cursor-pointer"
              onClick={() => {
                onClickHandler(props._id);
              }}
            >
              {props.jobTitle}
            </div>
            <div className="text-xs leading-5 text-pblue">{lastUpdated}</div>
          </div>
        </div>
      </th>
      <td className="border-t-0 px-6 text-prussblue align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
        {props.companyName}
      </td>
      <td className="border-t-0 px-6  text-prussblue align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {props.dateSaved}
      </td>
      <td className="border-t-0 px-6  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <span
          className={
            "inline-flex px-2 text-xs font-semibold leading-5 text-white rounded-full " +
            appStatus.color
          }
        >
          {appStatus.name}
        </span>
      </td>
      <td>
        <div className="relative px-5 pt-2">
          <button
            className="focus:ring-2 rounded-md focus:outline-none"
            onClick={EditDropDownHandler}
            role="button"
            aria-label="option"
          >
            <ThreeDots />
          </button>
          <div
            className={`dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ${
              settingButton ? null : "hidden"
            }`}
          >
            <div
              tabIndex={0}
              onClick={() => {
                props.rejectedHandler(props._id);
              }}
              className="focus:outline-none focus:text-prussblue text-xs w-full hover:bg-gray-100 py-4 px-4 cursor-pointer hover:text-prussblue"
            >
              <p>Rejected</p>
            </div>
            <div
              tabIndex={0}
              onClick={() => {
                props.favoriteHandler(props._id, props.favorite);
              }}
              className="focus:outline-none focus:text-prussblue text-xs w-full hover:bg-gray-100 py-4 px-4 cursor-pointer hover:text-prussblue"
            >
              <p>Favorite</p>
            </div>
            <div
              tabIndex={0}
              onClick={() => {
                props.deleteHandler(props._id);
              }}
              className="focus:outline-none focus:ttext-prussblue text-xs w-full hover:bg-gray-100 py-4 px-4 cursor-pointer hover:text-prussblue"
            >
              <p>Delete</p>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
