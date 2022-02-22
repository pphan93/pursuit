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
      </div>
    </div>
  );
};

export default Table;
