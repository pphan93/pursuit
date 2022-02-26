import Image from "next/image";
import style from "./LandingPage.module.css";

const SplashPage = () => {
  return (
    <div
      className="h-screen pb-14 bg-right bg-cover"
      style={{ backgroundImage: "url('')" }}
    >
      <div className="w-full container mx-auto p-6">
        <div className="w-full flex items-center justify-between">
          <a
            className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="#"
          >
            {/* <svg
              className="h-8 fill-current text-indigo-600 pr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z" />
            </svg>{" "} */}
            <svg
              className="h-8 fill-current text-indigo-600 pr-2"
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

          <div className="flex w-1/2 justify-end content-center">
            <a
              className="inline-block text-blue-300 no-underline hover:text-indigo-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4"
              data-tippy-content="@twitter_handle"
              href="https://twitter.com/intent/tweet?url=#"
            >
              <svg
                className="fill-current h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path>
              </svg>
            </a>
            <a
              className="inline-block text-blue-300 no-underline hover:text-indigo-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 "
              data-tippy-content="#facebook_id"
              href="https://www.facebook.com/sharer/sharer.php?u=#"
            >
              <svg
                className="fill-current h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div></div>

      <div
        className={`relative container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center ${style.landingpage}`}
      >
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
            Start PURSUITING your dream jobs{" "}
          </h1>
          <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
            At Pursuit we made it an one stop shop for your jobs hunting. We
            offered many features that was made with job applicatons tracking in
            mind. Give Pursuit a try for free.
          </p>

          <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">
            Download our app:
          </p>
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

        <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
          <a className="text-gray-500 no-underline hover:no-underline" href="#">
            &copy; Pursuit 2022
          </a>
        </div>
      </div>
    </div>
  );
};

export default SplashPage;
