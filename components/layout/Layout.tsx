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
          <SideBar showSideBar={showSideBar} />
          <div
            className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
            id="sidebarBackdrop"
          ></div>
          <div
            id="main-content"
            className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
          >
            <main>
              {/* Body */}
              {props.children}
            </main>
            {/* Footer */}
            <Footer />
          </div>
        </div>
        {/* <script async defer src="https://buttons.github.io/buttons.js"></script>
      <script src="https://demo.themesberg.com/windster/app.bundle.js"></script> */}
      </div>
    </>
  );
};

export default Layout;
