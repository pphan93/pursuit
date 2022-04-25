import Image from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const Avatar = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  const { data: session } = useSession();

  // console.log(session);

  const showDropDownHandler = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    /* Avatar */

    <>
      <div className="flex items-center justify-start md:justify-center">
        <div className="mr-3  md:block hidden">
          <p className="text-sm text-prussblue text-right">
            {session?.user.name}
          </p>
          <p className="text-xs text-pblue text-right">CA,USA</p>
        </div>
        <div className="relative" x-data="{ isOpen: false }">
          <button
            type="button"
            title="avatar"
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
              <span className="text-gray-800">{session?.user.email}</span>
              <span className="text-sm text-gray-400">
                {session?.user.name}
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
              <a
                href="#"
                onClick={() => {
                  console.log("click");
                  signOut();
                }}
              >
                Logout
              </a>
            </div>
          </div>

          <div
            //close the sidebar when on click
            onClick={showDropDownHandler}
            className={
              (showDropDown ? null : "hidden") +
              " bg-gray-900 opacity-0 fixed inset-0 z-[-1]"
            }
            id="sidebarBackdrop"
          ></div>
        </div>
      </div>
    </>
  );
};

export default Avatar;
