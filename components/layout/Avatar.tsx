import Image from "next/image";
import { useState } from "react";

const Avatar = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  const showDropDownHandler = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    /* Avatar */
    <div
      onBlur={showDropDownHandler}
      className="flex items-center justify-start md:justify-center"
    >
      <div className="mr-3">
        <p className="text-sm text-right">John Doe</p>
        <p className="text-xs text-right">CA,USA</p>
      </div>
      <div className="relative" x-data="{ isOpen: false }">
        <button
          onClick={showDropDownHandler}
          className="p-1 bg-gray-200 rounded-full focus:outline-none focus:ring"
        >
          <div className="object-cover w-6 h-6">
            <Image
              src="/avatar.png"
              alt="John Doe"
              layout="fill"
              //   width={20}
              //   height={20}
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </button>
        {/* <!-- green dot --> */}
        <div className="absolute right-0 p-1 bg-green-400 rounded-full bottom-1 animate-ping"></div>
        <div className="absolute right-0 p-1 bg-green-400 border border-white rounded-full bottom-1"></div>

        {/* <!-- Dropdown card --> */}
        <div
          className={
            (showDropDown ? null : "hidden") +
            " absolute mt-3 transform -translate-x-full bg-white rounded-md shadow-lg min-w-max"
          }
        >
          <div className="flex flex-col p-4 space-y-1 font-medium border-b">
            <span className="text-gray-800">Ahmed Kamel</span>
            <span className="text-sm text-gray-400">
              ahmed.kamel@example.com
            </span>
          </div>
          <ul className="flex flex-col p-2 my-2 space-y-1">
            <li>
              <a
                href="#"
                className="block px-2 py-1 transition rounded-md hover:bg-gray-100"
              >
                Link
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-2 py-1 transition rounded-md hover:bg-gray-100"
              >
                Another Link
              </a>
            </li>
          </ul>
          <div className="flex items-center justify-center p-4 text-blue-700 underline border-t">
            <a href="#">Logout</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
