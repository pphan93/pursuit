// import MainNavBar from "./MainNavBar";

import Image from "next/image";
import { useState } from "react";

import Footer from "./Footer";
import SideBar from "./SideBar";
import TopNavBar from "./TopNavBar";

const Layout: React.FC = (props) => {
  const [showSideBar, setShowSideBar] = useState(false);

  const onShowSideBarHandler: () => void = () => {
    setShowSideBar(!showSideBar);
  };

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
            <main>
              {/* Body */}
              {props.children}
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
