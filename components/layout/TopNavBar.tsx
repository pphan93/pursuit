import {
  Calendar2,
  CloseSquare,
  HambergerMenu,
  Notification,
  SearchNormal1,
} from "iconsax-react";

import Image from "next/image";
import Link from "next/link";
import Avatar from "./Avatar";

type AppProps = {
  onShowSideBar: () => void;
  showSideBar: boolean;
};

const TopNavBar = ({ onShowSideBar, showSideBar }: AppProps) => {
  return (
    <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              type="button"
              title="hamburgerbutton"
              onClick={onShowSideBar}
              id="toggleSidebarMobile"
              aria-expanded="true"
              // aria-controls="Sidebar"
              className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
            >
              <div id="toggleSidebarMobileHamburger" className="w-6 h-6 ">
                {showSideBar ? <CloseSquare /> : <HambergerMenu />}
              </div>
            </button>
            <Link href="/">
              <a className="text-xl font-bold flex items-center lg:ml-2.5">
                <div className="h-6 mr-3">
                  <Image
                    src="/status-up.svg"
                    alt="Pursuit Logo"
                    layout="fixed"
                    width={30}
                    height={30}

                    // objectFit='contain'
                  />
                </div>
                <span className="self-center whitespace-nowrap">Pursuit</span>
              </a>
            </Link>

            <form action="#" method="GET" className="hidden lg:block lg:pl-32">
              <label htmlFor="topbar-search" className="sr-only">
                Search
              </label>
              <div className="mt-1 relative lg:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchNormal1 size="18" color="#1d3557" variant="Outline" />
                </div>
                <input
                  type="text"
                  name="email"
                  id="topbar-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center ">
            <button
              id="toggleSidebarMobileSearch"
              type="button"
              className="lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg"
            >
              <span className="sr-only">Search</span>
              <SearchNormal1 size="20" color="#1d3557" variant="Outline" />
            </button>
            <div className="hidden lg:flex items-center">
              <span className="mr-5">
                <Notification size="22" color="#1d3557" variant="Outline" />
              </span>
              <span className="mr-5">
                <Calendar2 size="22" color="#1d3557" variant="Outline" />
              </span>
            </div>
            {/* Avatar */}
            <Avatar />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
