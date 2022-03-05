// import MainNavBar from "./MainNavBar";

import Image from "next/image";
import { useState } from "react";

import Footer from "./Footer";
import SideBar from "./SideBar";
import TopNavBar from "./TopNavBar";

import { useRouter } from "next/router";

const Layout: React.FC = (props) => {
  const [showSideBar, setShowSideBar] = useState(false);

  const router = useRouter();

  const onShowSideBarHandler: () => void = () => {
    setShowSideBar(!showSideBar);
  };

  //use the layout when it not landing page, login, or signup
  if (
    router.pathname != "/landingpage" &&
    router.pathname != "/login" &&
    router.pathname != "/signup"
  ) {
    return (
      <>
        <div>
          {/* Top NavBar */}
          <TopNavBar
            onShowSideBar={onShowSideBarHandler}
            showSideBar={showSideBar}
          />
          <div className="flex overflow-hidden bg-white pt-16">
            {/* SideBar */}
            <SideBar
              onShowSideBar={onShowSideBarHandler}
              showSideBar={showSideBar}
            />
            <div
              //close the sidebar when on click
              onClick={onShowSideBarHandler}
              className={
                (showSideBar ? null : "hidden") +
                " bg-gray-900 opacity-50 fixed inset-0 z-10"
              }
              id="sidebarBackdrop"
            ></div>
            <div
              id="main-content"
              className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-60"
            >
              <main className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
                {/* Body */}
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                  <div className="rounded-t mb-0 px-4 pt-6 pb-8 border-0">
                    {props.children}
                  </div>
                </div>
              </main>

              {/* Footer */}
              <Footer />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <>{props.children}</>;
  }
};

export default Layout;
