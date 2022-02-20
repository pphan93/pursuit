import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
const people = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  // More people...
];
const Home: NextPage = () => {
  return (
    <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Page Visits
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                See all
              </button>
            </div>
          </div>
        </div>

        <div className="block w-full overflow-x-auto">
          <table className="items-center bg-transparent w-full border-collapse ">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Page name
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Visitors
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Unique users
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Bounce rate
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                  /argon/
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  4,569
                </td>
                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  340
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                  46,53%
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                  /argon/index.html
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  3,985
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  319
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                  46,53%
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                  /argon/charts.html
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  3,513
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  294
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                  36,49%
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                  /argon/tables.html
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  2,050
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  147
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                  50,87%
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                  /argon/profile.html
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  1,795
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  190
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-down text-red-500 mr-4"></i>
                  46,53%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    // <div className=" px-4 py-4 overflow-x-auto">
    //   <div className="rounded-t mb-0 py-3 border-0">
    //     <div className="flex flex-wrap items-center">
    //       <div className="relative w-full px-4 max-w-full flex-grow flex-1">
    //         <h3 className="font-semibold text-base text-blueGray-700">
    //           Page Visits
    //         </h3>
    //       </div>
    //       <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
    //         <button
    //           className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    //           type="button"
    //         >
    //           See all
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
    //     <table className="min-w-full leading-normal">
    //       <thead>
    //         <tr>
    //           <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
    //             User
    //           </th>
    //           <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
    //             Rol
    //           </th>
    //           <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
    //             Created at
    //           </th>
    //           <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
    //             Status
    //           </th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         <tr>
    //           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    //             <div className="flex items-center">
    //               <div className="flex-shrink-0 w-10 h-10">
    //                 <img
    //                   className="w-full h-full rounded-full"
    //                   src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
    //                   alt=""
    //                 />
    //               </div>
    //               <div className="ml-3">
    //                 <p className="text-gray-900 whitespace-no-wrap">
    //                   Vera Carpenter
    //                 </p>
    //               </div>
    //             </div>
    //           </td>
    //           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    //             <p className="text-gray-900 whitespace-no-wrap">Admin</p>
    //           </td>
    //           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    //             <p className="text-gray-900 whitespace-no-wrap">Jan 21, 2020</p>
    //           </td>
    //           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    //             <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
    //               <span
    //                 aria-hidden
    //                 className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
    //               ></span>
    //               <span className="relative">Activo</span>
    //             </span>
    //           </td>
    //         </tr>
    //         <tr>
    //           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    //             <div className="flex items-center">
    //               <div className="flex-shrink-0 w-10 h-10">
    //                 <img
    //                   className="w-full h-full rounded-full"
    //                   src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
    //                   alt=""
    //                 />
    //               </div>
    //               <div className="ml-3">
    //                 <p className="text-gray-900 whitespace-no-wrap">
    //                   Blake Bowman
    //                 </p>
    //               </div>
    //             </div>
    //           </td>
    //           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    //             <p className="text-gray-900 whitespace-no-wrap">Editor</p>
    //           </td>
    //           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    //             <p className="text-gray-900 whitespace-no-wrap">Jan 01, 2020</p>
    //           </td>
    //           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    //             <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
    //               <span
    //                 aria-hidden
    //                 className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
    //               ></span>
    //               <span className="relative">Activo</span>
    //             </span>
    //           </td>
    //         </tr>
    //         <tr>
    //           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    //             <div className="flex items-center">
    //               <div className="flex-shrink-0 w-10 h-10">
    //                 <img
    //                   className="w-full h-full rounded-full"
    //                   src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
    //                   alt=""
    //                 />
    //               </div>
    //               <div className="ml-3">
    //                 <p className="text-gray-900 whitespace-no-wrap">
    //                   Dana Moore
    //                 </p>
    //               </div>
    //             </div>
    //           </td>
    //           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    //             <p className="text-gray-900 whitespace-no-wrap">Editor</p>
    //           </td>
    //           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    //             <p className="text-gray-900 whitespace-no-wrap">Jan 10, 2020</p>
    //           </td>
    //           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    //             <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
    //               <span
    //                 aria-hidden
    //                 className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
    //               ></span>
    //               <span className="relative">Suspended</span>
    //             </span>
    //           </td>
    //         </tr>
    //         <tr>
    //           <td className="px-5 py-5 bg-white text-sm">
    //             <div className="flex items-center">
    //               <div className="flex-shrink-0 w-10 h-10">
    //                 <img
    //                   className="w-full h-full rounded-full"
    //                   src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
    //                   alt=""
    //                 />
    //               </div>
    //               <div className="ml-3">
    //                 <p className="text-gray-900 whitespace-no-wrap">
    //                   Alonzo Cox
    //                 </p>
    //               </div>
    //             </div>
    //           </td>
    //           <td className="px-5 py-5 bg-white text-sm">
    //             <p className="text-gray-900 whitespace-no-wrap">Admin</p>
    //           </td>
    //           <td className="px-5 py-5 bg-white text-sm">
    //             <p className="text-gray-900 whitespace-no-wrap">Jan 18, 2020</p>
    //           </td>
    //           <td className="px-5 py-5 bg-white text-sm">
    //             <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
    //               <span
    //                 aria-hidden
    //                 className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
    //               ></span>
    //               <span className="relative">Inactive</span>
    //             </span>
    //           </td>
    //         </tr>
    //       </tbody>
    //     </table>
    //     <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
    //       <span className="text-xs xs:text-sm text-gray-900">
    //         Showing 1 to 4 of 50 Entries
    //       </span>
    //       <div className="inline-flex mt-2 xs:mt-0">
    //         <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
    //           Prev
    //         </button>
    //         <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
    //           Next
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Home;
