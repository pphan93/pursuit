import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { Chart } from "react-google-charts";

export const data = [
  ["From", "To", "Weight"],
  ["A", "X", 5],
  ["A", "Y", 7],
  ["A", "Z", 6],
  ["B", "X", 2],
  ["B", "Y", 9],
  ["B", "Z", 4],
];

export const options = {};

const Metrics = () => {
  return (
    <div className=" md:p-8 mb-6">
      <div className="flex flex-wrap items-center mb-6">
        <div className="relative w-full  max-w-full flex-grow flex-1">
          <h1 className="font-semibold text-base md:text-lg lg:text-2xl text-prussblue">
            Job Application Metrics
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <a
          className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-2 intro-y bg-white"
          href="#"
        >
          <div className="p-5">
            <div className="flex justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <div className="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                <span className="flex items-center">30%</span>
              </div>
            </div>
            <div className="ml-2 w-full flex-1">
              <div>
                <div className="mt-3 text-3xl font-bold leading-8">4.510</div>

                <div className="mt-1 text-base text-gray-600">
                  Total Job Applications
                </div>
              </div>
            </div>
          </div>
        </a>
        <a
          className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-2 intro-y bg-white"
          href="#"
        >
          <div className="p-5">
            <div className="flex justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <div className="bg-red-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                <span className="flex items-center">30%</span>
              </div>
            </div>
            <div className="ml-2 w-full flex-1">
              <div>
                <div className="mt-3 text-3xl font-bold leading-8">4.510</div>

                <div className="mt-1 text-base text-gray-600">
                  Total Rejected
                </div>
              </div>
            </div>
          </div>
        </a>
        {/* <a
          className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
          href="#"
        >
          <div className="p-5">
            <div className="flex justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                />
              </svg>
              <div className="bg-yellow-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                <span className="flex items-center">30%</span>
              </div>
            </div>
            <div className="ml-2 w-full flex-1">
              <div>
                <div className="mt-3 text-3xl font-bold leading-8">4.510</div>

                <div className="mt-1 text-base text-gray-600">Total</div>
              </div>
            </div>
          </div>
        </a> */}
        {/* <a
          className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
          href="#"
        >
          <div className="p-5">
            <div className="flex justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
              </svg>
              <div className="bg-blue-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                <span className="flex items-center">30%</span>
              </div>
            </div>
            <div className="ml-2 w-full flex-1">
              <div>
                <div className="mt-3 text-3xl font-bold leading-8">4.510</div>

                <div className="mt-1 text-base text-gray-600">Item Sales</div>
              </div>
            </div>
          </div>
        </a> */}
      </div>

      {/* Sankey Graph */}
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-5">
        <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                2022 Job Search
              </h3>
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <Chart
              chartType="Sankey"
              width="100%"
              height="200px"
              data={data}
              options={options}
            />
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Latest Transactions
              </h3>
              <span className="text-base font-normal text-gray-500">
                This is a list of latest transactions
              </span>
            </div>
            <div className="flex-shrink-0">
              <a
                href="#"
                className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
              >
                View all
              </a>
            </div>
          </div>

          <div className="flex flex-col mt-8">
            <div className="overflow-x-auto rounded-lg">
              <div className="align-middle inline-block min-w-full">
                <div className="shadow overflow-hidden sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Transaction
                        </th>
                        <th
                          scope="col"
                          className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Date & Time
                        </th>
                        <th
                          scope="col"
                          className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                          Payment from{" "}
                          <span className="font-semibold">Bonnie Green</span>
                        </td>
                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                          Apr 23 ,2021
                        </td>
                        <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                          $2300
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                          Payment refund to{" "}
                          <span className="font-semibold">#00910</span>
                        </td>
                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                          Apr 23 ,2021
                        </td>
                        <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                          -$670
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                          Payment failed from{" "}
                          <span className="font-semibold">#087651</span>
                        </td>
                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                          Apr 18 ,2021
                        </td>
                        <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                          $234
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                          Payment from{" "}
                          <span className="font-semibold">Lana Byrd</span>
                        </td>
                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                          Apr 15 ,2021
                        </td>
                        <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                          $5000
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                          Payment from{" "}
                          <span className="font-semibold">Jese Leos</span>
                        </td>
                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                          Apr 15 ,2021
                        </td>
                        <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                          $2300
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                          Payment from{" "}
                          <span className="font-semibold">THEMESBERG LLC</span>
                        </td>
                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                          Apr 11 ,2021
                        </td>
                        <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                          $560
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                          Payment from{" "}
                          <span className="font-semibold">Lana Lysle</span>
                        </td>
                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                          Apr 6 ,2021
                        </td>
                        <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                          $1437
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  console.log(session);
  if (!session) {
    return {
      redirect: {
        destination: "/landingpage",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default Metrics;

// NewApplication.getLayout = function getLayout(page: ReactElement) {
//   return page;
// };
