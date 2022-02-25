import {
  ChartSquare,
  FavoriteChart,
  Home2,
  Setting3,
  TaskSquare,
} from "iconsax-react";
import Link from "next/link";
import ActiveLink from "./ActiveLink";
import { useRouter } from "next/router";

type AppProps = {
  onShowSideBar: () => void;
  showSideBar: boolean;
};

const SideBar = ({ showSideBar }: AppProps) => {
  const router = useRouter();
  //pass the boolean from layout component to sidebar to show or hide sidebar for small screen
  let showSideBarCss;
  if (showSideBar) {
    showSideBarCss =
      "fixed z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w- transition-width duration-75";
  } else {
    showSideBarCss =
      "fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-60 transition-width duration-75";
  }
  return (
    <aside id="sidebar" className={showSideBarCss} aria-label="Sidebar">
      <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 bg-white divide-y space-y-1">
            <ul className="space-y-2 pb-2">
              <li>
                <form action="#" method="GET" className="lg:hidden">
                  <label htmlFor="mobile-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="email"
                      id="mobile-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 focus:ring-cyan-600 block w-full pl-10 p-2.5"
                      placeholder="Search"
                    />
                  </div>
                </form>
              </li>
              <li>
                {/* <ActiveLink activeClassName="bg-blue" href="/"> */}
                <Link href="/">
                  <a
                    title="home"
                    className={`text-base font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group ${
                      router.pathname == "/" ? "text-blue-900" : "text-gray-900"
                    }`}
                  >
                    <span className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75">
                      <Home2 />
                    </span>

                    <span className="ml-3">Home</span>
                  </a>
                </Link>
                {/* </ActiveLink> */}
                {/* <Link href="/">
                  <a
                    title="home"
                    className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                  >
                    <span className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75">
                      <Home2 />
                    </span>

                    <span className="ml-3">Home</span>
                  </a>
                </Link> */}
              </li>
              <li>
                <Link href="/favorites">
                  <a
                    title="favorites"
                    className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                  >
                    <span className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75">
                      <FavoriteChart />
                    </span>

                    <span className="ml-3">Favorites</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/favorites">
                  <a
                    title="favorites"
                    className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                  >
                    <span className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75">
                      <TaskSquare />
                    </span>

                    <span className="ml-3">Tasks</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/favorites">
                  <a
                    title="favorites"
                    className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                  >
                    <span className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75">
                      <ChartSquare />
                    </span>

                    <span className="ml-3">Metrics</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/favorites">
                  <a
                    title="favorites"
                    className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                  >
                    <span className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75">
                      <Setting3 />
                    </span>

                    <span className="ml-3">Settings</span>
                  </a>
                </Link>
              </li>
            </ul>
            <div className="space-y-2 pt-2">
              {/* <a
                href="https://demo.themesberg.com/windster/pricing/"
                className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
              >
                <svg
                  className="w-5 h-5 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="gem"
                  role="Image"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"
                  ></path>
                </svg>
                <span className="ml-4">Upgrade to Pro</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
