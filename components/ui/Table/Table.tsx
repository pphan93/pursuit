import { AddSquare, Filter, Sort } from "iconsax-react";
import TableRow from "./TableRow";

interface JobApp {
  id: string;
  logo: string;
  jobPosition: string;
  lastUpdated: string;
  company: string;
  dateSaved: string;
  status: string;
}

interface Props {
  jobApps: JobApp[];
}

const Table: React.FC<Props> = ({ jobApps }) => {
  return (
    <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
        <div className="rounded-t mb-0 px-4 pt-6 pb-8 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                All Job Applications
              </h3>
            </div>

            {/* Side Button */}
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button
                className=" text-black active:bg-indigo-600 text-xs font-bold px-3 py-1 hover:bg-gray-100 group rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                <span className="flex items-center">
                  <span className="pr-2 text-xs">
                    <AddSquare size="16" />
                  </span>
                  <span>New App</span>
                </span>
              </button>
              <button
                className=" text-black active:bg-indigo-600 text-xs font-bold px-3 py-1 hover:bg-gray-100 group rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                <span className="flex items-center">
                  <span className="pr-2">
                    <Sort size="16" />
                  </span>
                  <span>Sort</span>
                </span>
              </button>
              <button
                className=" text-black active:bg-indigo-600 text-xs font-bold px-3 py-1 hover:bg-gray-100 group rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Job Position
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Company
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Date Saved
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Status
                </th>
              </tr>
            </thead>

            {/* Items in Table - table rows */}
            <tbody>
              {jobApps.map((job) => {
                return (
                  <TableRow
                    key={job.id}
                    id={job.id}
                    jobPosition={job.jobPosition}
                    logo={job.logo}
                    lastUpdated={job.lastUpdated}
                    company={job.company}
                    status={job.status}
                    dateSaved={job.dateSaved}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
        <div
          id="pagination"
          className="w-full flex justify-center border-t border-gray-100 pt-4 items-center mb-3"
        >
          <svg
            className="h-6 w-6"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.4">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 12C9 12.2652 9.10536 12.5196 9.29289 12.7071L13.2929 16.7072C13.6834 17.0977 14.3166 17.0977 14.7071 16.7072C15.0977 16.3167 15.0977 15.6835 14.7071 15.293L11.4142 12L14.7071 8.70712C15.0977 8.31659 15.0977 7.68343 14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289L9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12Z"
                fill="#2C2C2C"
              />
            </g>
          </svg>

          <p className="leading-relaxed cursor-pointer mx-2 text-blue-600 hover:text-blue-600 text-sm">
            1
          </p>
          <p className="leading-relaxed cursor-pointer mx-2 text-sm hover:text-blue-600">
            2
          </p>
          <p className="leading-relaxed cursor-pointer mx-2 text-sm hover:text-blue-600">
            {" "}
            3{" "}
          </p>
          <p className="leading-relaxed cursor-pointer mx-2 text-sm hover:text-blue-600">
            {" "}
            4{" "}
          </p>
          <svg
            className="h-6 w-6"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15 12C15 11.7348 14.8946 11.4804 14.7071 11.2929L10.7071 7.2929C10.3166 6.9024 9.6834 6.9024 9.2929 7.2929C8.9024 7.6834 8.9024 8.3166 9.2929 8.7071L12.5858 12L9.2929 15.2929C8.9024 15.6834 8.9024 16.3166 9.2929 16.7071C9.6834 17.0976 10.3166 17.0976 10.7071 16.7071L14.7071 12.7071C14.8946 12.5196 15 12.2652 15 12Z"
              fill="#18A0FB"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Table;
