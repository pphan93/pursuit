import { AddSquare, Filter, Sort } from "iconsax-react";
import { MouseEvent, useState } from "react";
import TableRow from "./TableRow";
import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from "swr";

import ArrowLeft from "../Icon/ArrowLeft";
import ArrowRight from "../Icon/ArrowRight";
import Loading from "../Loading";

// interface JobApp {
//   _id: string;
//   logo: string;
//   jobTitle: string;
//   updatedDate: Date;
//   company: {
//     name: string;
//   };
//   createdDate: Date;
//   status: string;
// }

// interface JobApp {
//   query: string;
// }

interface Props {
  query: string;
}

type Job = {
  _id: string;
  jobTitle: string;
  company: {
    name: string;
    location: string;
  };
  applicationStatus: [
    {
      name: string;
      status: string;
    }
  ];
  lastModified: Date;
  createdDate: Date;
  favorite: boolean;
};

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

const Table: React.FC<Props> = ({ query }) => {
  const { mutate } = useSWRConfig();

  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const { data, error } = useSWR(
    `/api/jobapp?page=${currentPage}&option=${query}`,
    fetcher
  );

  // console.log(query);

  const message: any = data;
  if (error) return <div>failed to load</div>;
  if (!data) return <Loading />;

  console.log(message);

  // console.log("Table ");
  // console.log(jobApps[0]._id);
  // let pageLimit = 10;

  let pagesNumber: number;

  if (message.total < 1) {
    pagesNumber = 1;
  } else {
    pagesNumber = message.total;
  }

  //Change pages forward and backward
  function nextPage() {
    if (currentPage !== pagesNumber) {
      setCurrentPage(currentPage + 1);
    }
  }

  function lastPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const changePage = (e: MouseEvent<HTMLParagraphElement>): void => {
    //Have declare type HTML or else typescript scream
    const text = (e.target as HTMLElement).textContent as string;

    //conver to number
    const clickedOnPageNumber: number = +text;
    setCurrentPage(clickedOnPageNumber);
  };

  // // get array of numbers for page number
  const getPaginationGroup = () => {
    // let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    let start = 0;
    return new Array(pagesNumber).fill(null).map((_, idx) => start + idx + 1);
  };

  //set favorite application or remove them
  const favoriteOnHandler = async (id: string, favorite: boolean) => {
    const res = await fetch("/api/jobapp/favorite?appID=" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        favorite: favorite === undefined ? true : !favorite,
      }),
    });
    const data = await res.json();
    const statusCode = res.status;
    // console.log(data);
    console.log(statusCode);
    if (statusCode === 200) {
      //trigger revalidation if there changes, trigger render
      mutate(`/api/jobapp?page=${currentPage}&option=${query}`);
    }
  };

  const deleteOnHandler = async (id: string) => {
    const res = await fetch("/api/jobapp/delete?appID=" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    const statusCode = res.status;
    // console.log(data);
    if (statusCode === 200) {
      //trigger revalidation if there changes, trigger render
      mutate(`/api/jobapp?page=${currentPage}&option=${query}`);
    }
  };

  const rejectedOnHandler = async (id: string) => {
    const res = await fetch("/api/jobapp/reject?appID=" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    const statusCode = res.status;
    // console.log(data);
    if (statusCode === 200) {
      //trigger revalidation if there changes, trigger render
      mutate(`/api/jobapp?page=${currentPage}&option=${query}`);
    }
  };

  return (
    <>
      <div className="rounded-t mb-0 px-4 pt-6 pb-8 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 className="font-semibold text-base text-prussblue">
              All Job Applications
            </h3>
          </div>

          {/* Side Button */}
          <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
            <button
              onClick={() => {
                router.push("/new");
              }}
              className=" text-black active:bg-indigo-600 text-xs font-bold px-3 py-1 hover:bg-gray-100 group rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              <span className="flex items-center text-cblue">
                <span className="pr-2 text-xs">
                  <AddSquare size="16" />
                </span>
                <span>New App</span>
              </span>
            </button>
            <button
              className=" text-prussblueactive:bg-indigo-600 text-xs font-bold px-3 py-1 hover:bg-gray-100 group rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              <span className="flex items-center ">
                <span className="pr-2">
                  <Sort size="16" />
                </span>
                <span>Sort</span>
              </span>
            </button>
            <button
              className=" text-prussblue active:bg-indigo-600 text-xs font-bold px-3 py-1 hover:bg-gray-100 group rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              <span className="flex items-center">
                <span className="pr-2">
                  <Filter size="16" variant="Bold" />
                </span>
                <span>Filter</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Table header */}
      <div className="block w-full overflow-x-auto">
        <table className="items-center bg-transparent w-full border-collapse ">
          <thead>
            <tr>
              <th className="px-6  text-cblue align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Job Position
              </th>
              <th className="px-6  text-cblue align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Company
              </th>
              <th className="px-6  text-cblue align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Date Saved
              </th>
              <th className="px-6 text-cblue align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Status
              </th>
              <th className="px-6 text-cblue align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Setting
              </th>
            </tr>
          </thead>

          {/* Items in Table - table rows */}
          <tbody>
            {message.data.map((job: Job) => {
              return (
                <TableRow
                  key={job._id}
                  _id={job._id}
                  jobTitle={job.jobTitle}
                  logo={`https://logo.clearbit.com/${job.company.name.toLowerCase()}.com`}
                  updatedDate={job.lastModified}
                  companyName={job.company.name}
                  favorite={job.favorite}
                  status={job.applicationStatus}
                  favoriteHandler={favoriteOnHandler}
                  deleteHandler={deleteOnHandler}
                  rejectedHandler={rejectedOnHandler}
                  dateSaved={new Date(job.createdDate).toLocaleDateString(
                    "en-us",
                    { year: "numeric", month: "short", day: "numeric" }
                  )}
                />
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div
        id="pagination"
        className="w-full flex justify-center border-t border-gray-100 pt-4 items-center mb-3"
      >
        <button
          type="button"
          title="last page"
          onClick={lastPage}
          className="cursor-pointer"
        >
          {currentPage === 1 ? (
            <ArrowLeft
              styleName="md:h-6 md:w-6 h-10 w-10 disbled"
              color="#2C2C2C"
            />
          ) : (
            <ArrowLeft styleName="md:h-6 md:w-6 h-10 w-10" color="#18A0FB" />
          )}
        </button>
        {getPaginationGroup().map((number, idx) => {
          return (
            <p
              onClick={changePage}
              key={idx}
              className={` hidden sm:flex sm:items-center leading-relaxed cursor-pointer mx-2 text-sm hover:text-blue-600 ${
                currentPage === number ? "text-blue-600" : null
              }`}
            >
              {number}
            </p>
          );
        })}

        <button
          type="button"
          title="last page"
          onClick={nextPage}
          className="cursor-pointer"
        >
          {currentPage === pagesNumber ? (
            <ArrowRight
              styleName="md:h-6 md:w-6 h-10 w-10 disabled"
              color="#2C2C2C"
            />
          ) : (
            <ArrowRight styleName="md:h-6 md:w-6 h-10 w-10" color="#18A0FB" />
          )}
        </button>
      </div>
    </>
    // </div>
    // </div>
  );
};

export default Table;
