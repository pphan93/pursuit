import Image from "next/image";
import Link from "next/link";
import style from "./LandingPage.module.css";

const SplashPage = () => {
  return (
    <div
      className="h-screen pb-14 bg-right bg-cover"
      // style={{ backgroundImage: "url('')" }}
    >
      <div className="w-full container mx-auto p-6">
        <div className="w-full flex items-center justify-between">
          <a
            className="flex items-center text-prussblue no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="#"
          >
            <svg
              className="h-8 fill-current text-prussblue pr-2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.87988 18.9001C6.46988 18.9001 6.12988 18.5601 6.12988 18.1501V16.0801C6.12988 15.6701 6.46988 15.3301 6.87988 15.3301C7.28988 15.3301 7.62988 15.6701 7.62988 16.0801V18.1501C7.62988 18.5701 7.28988 18.9001 6.87988 18.9001Z" />
              <path d="M12 18.9C11.59 18.9 11.25 18.56 11.25 18.15V14C11.25 13.59 11.59 13.25 12 13.25C12.41 13.25 12.75 13.59 12.75 14V18.15C12.75 18.57 12.41 18.9 12 18.9Z" />
              <path d="M17.1201 18.9002C16.7101 18.9002 16.3701 18.5602 16.3701 18.1502V11.9302C16.3701 11.5202 16.7101 11.1802 17.1201 11.1802C17.5301 11.1802 17.8701 11.5202 17.8701 11.9302V18.1502C17.8701 18.5702 17.5401 18.9002 17.1201 18.9002Z" />
              <path d="M6.87958 13.1799C6.53958 13.1799 6.23958 12.9499 6.14958 12.6099C6.04958 12.2099 6.28958 11.7999 6.69958 11.6999C10.3796 10.7799 13.6196 8.76992 16.0896 5.89992L16.5496 5.35992C16.8196 5.04992 17.2896 5.00992 17.6096 5.27992C17.9196 5.54992 17.9596 6.01992 17.6896 6.33992L17.2296 6.87992C14.5596 9.99992 11.0396 12.1699 7.05958 13.1599C6.99958 13.1799 6.93958 13.1799 6.87958 13.1799Z" />
              <path d="M17.1204 9.5201C16.7104 9.5201 16.3704 9.1801 16.3704 8.7701V6.6001H14.1904C13.7804 6.6001 13.4404 6.2601 13.4404 5.8501C13.4404 5.4401 13.7804 5.1001 14.1904 5.1001H17.1204C17.5304 5.1001 17.8704 5.4401 17.8704 5.8501V8.7801C17.8704 9.1901 17.5404 9.5201 17.1204 9.5201Z" />
              <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" />
            </svg>
            Pursuit
          </a>

          <div className="flex w-1/2 justify-end content-center ">
            <Link href="/login">
              <a className="border border-prussblue text-prussblue mr-5 px-8 py-2 rounded-full   hover:bg-purple-600 transition duration-300">
                Login
              </a>
            </Link>
            <Link href="/signup">
              <a className="bg-prussblue text-white px-4 py-2 rounded-full text-1xl  hover:bg-purple-800 transition duration-300">
                Pursuit Now
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div></div>

      <div
        className={`relative container pt-24 md:pt-35 px-6 mx-auto flex flex-wrap  flex-col md:flex-row items-center ${style.landingpage}`}
      >
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-prussblue font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
            Start PURSUITING your dream jobs{" "}
          </h1>
          <p className="leading-normal text-prussblue text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
            At Pursuit we made it an one stop shop for your jobs hunting. We
            offered many features that was made with job applicatons tracking in
            mind. Give Pursuit a try for free.
          </p>

          {/* <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">
            Check out our app:
          </p> */}

          <Link href="/signup">
            <a className="bg-prussblue text-white px-4 py-2  rounded-full text-1xl  hover:bg-purple-800 transition duration-300">
              Start Pursuiting
            </a>
          </Link>
          <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
            {/* <img src="App Store.svg" className="h-12 pr-4 bounce-top-icons" />
            <img src="Play Store.svg" className="h-12 bounce-top-icons" /> */}
          </div>
        </div>

        <div className={`w-full xl:w-3/5 py-6 overflow-y-hidden  `}>
          <img
            className="w-5/6 mx-auto  xl:mr-0 slide-in-bottom"
            src="Pursuit_pic.png"
          />
        </div>

        <img
          className="absolute  bottom-0 right-0 z-[-1]"
          src="Group 3516.png"
        />

        <img
          className="absolute  bottom-0 left-0 z-[-1]"
          src="Group 3510.png"
        />

        <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
          <a className="text-honeydew no-underline hover:no-underline" href="#">
            &copy; Pursuit 2022
          </a>
        </div>
      </div>
    </div>
  );
};

export default SplashPage;
