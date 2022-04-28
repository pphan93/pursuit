import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

//declare a type for user input
type IUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const [userInput, setUserInput] = useState<IUser>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  } as IUser);

  const router = useRouter();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setUserInput((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //quick validation to check if it not empty and contain @ in email
    if (
      !userInput.email ||
      !userInput.email.includes("@") ||
      !userInput.password
    ) {
      console.log("invalid");
      return;
    }

    //send user info to backend to add user to database
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: userInput.firstName,
        lastName: userInput.lastName,
        email: userInput.email,
        password: userInput.password,
      }),
    });

    const data = await res.json();
    const statusCode = res.status;
    console.log(statusCode);

    //if status 201 - use created successfully then redirect to login page else show error message
    if (statusCode === 201) {
      router.push("/login");
    } else {
      console.log(data);
    }
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="py-6 container mx-auto">
        <div className="flex justify-center my-12 bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div
            className="hidden lg:block lg:w-1/2 bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
            }}
          ></div>
          <div className="w-full p-8 lg:w-1/2">
            <Link href="/landingpage" passHref>
              <h2 className="text-2xl font-semibold text-gray-700 text-center">
                Pursuit
              </h2>
            </Link>
            <p className="text-xl text-gray-600 text-center">
              Let&apos;s get started!
            </p>
            {/* <a
              href="#"
              className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
            >
              <div className="px-4 py-3">
                <img
                  className="h-6 w-6"
                  alt="linkedin"
                  src="https://logo.clearbit.com/linkedin.com"
                />
              </div>
              <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
                Sign up with LinkedIn
              </h1>
            </a> */}
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <a
                href="#"
                className="text-xs text-center text-gray-500 uppercase"
              >
                or signup with email
              </a>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div className="mb-4 md:flex md:justify-between">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label
                  className="block mb-2 text-gray-700 text-sm font-bold"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  onChange={onChangeHandler}
                  value={userInput.firstName}
                />
              </div>
              <div className="md:ml-2">
                <label
                  className="block mb-2 text-gray-700 text-sm font-bold"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={onChangeHandler}
                  value={userInput.lastName}
                />
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label
                  className="block mb-2 text-gray-700 text-sm font-bold"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  id="email"
                  type="email"
                  placeholder="email@email.com"
                  name="email"
                  onChange={onChangeHandler}
                  value={userInput.email}
                />
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label
                  className="block mb-2 text-gray-700 text-sm font-bold"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  id="password"
                  type="password"
                  placeholder="*********"
                  name="password"
                  onChange={onChangeHandler}
                  value={userInput.password}
                />
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-1">
                <label
                  className="block mb-2 text-gray-700 text-sm font-bold"
                  htmlFor="confirmpassword"
                >
                  Confirm Password
                </label>
                <input
                  className="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  id="confirmpassword"
                  type="password"
                  placeholder="*********"
                  name="confirmPassword"
                  onChange={onChangeHandler}
                  value={userInput.confirmPassword}
                />
              </div>
            </div>
            <div className="mt-8">
              <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                Sign Up
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <Link href="/login">
                <a className="text-xs text-gray-500 uppercase">or login</a>
              </Link>

              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
