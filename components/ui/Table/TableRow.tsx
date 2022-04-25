import { useRouter } from "next/router";

type JobApp = {
  _id: string;
  logo: string;
  jobTitle: string;
  updatedDate: Date;
  companyName: string;
  dateSaved: string;
  status: string;
};

const TableRow = (props: JobApp) => {
  const router = useRouter();
  // console.log(
  //   Math.round((+new Date() - +new Date(props.updatedDate)) / 3600000)
  // );

  const onClickHandler = (id: string) => {
    router.push({ pathname: `/jobdetail/[appID]`, query: { appID: id } });
  };

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
        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
          {props.status}
        </span>
      </td>
    </tr>
  );
};

export default TableRow;
