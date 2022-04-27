import Link from "next/link";
import { signIn } from "next-auth/react";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";

type signInType = {
  error: string | undefined;
  status: number;
  ok: boolean;
  url: string | null;
};

const Login = () => {
  const [email, setEmail] = useState<string | string[] | undefined>("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState<string | string[] | undefined>(
    ""
  );

  const router = useRouter();

  //check for error message in the url (query) and show message to screen and prefill the email
  //   useEffect(() => {
  //     if (router.query.error) {
  //       setLoginError(router.query.error);
  //       setEmail(router.query.email);
  //     }
  //   }, [router]);

  //input for email and password
  const emailInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  //on submit send to nextauth api by calling the signIn function
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //redirect to dashboard if successful
    const status: signInType | undefined = await signIn("credentials", {
      redirect: false,
      callbackUrl: `${window.location.origin}/`,
      email: email,
      password: password,
    });

    //redirect: false will return an object only for email and credentials provider
    const errorMessage = status!.error;
    const url = status!.url;

    //redirect to dashboard if successful (if url contain string then login/auth succesfully or else it empty)
    if (url) {
      router.push("/");
    } else {
      setLoginError(errorMessage);
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
                "url('https://images.unsplash.com/photo-1546472466-081e1113893a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
            }}
          ></div>
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-prussblue text-center">
              Pursuit
            </h2>
            <p className="text-xl text-prussblue  text-center">Welcome back!</p>
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
              <h1 className="px-4 py-3 w-5/6 text-center text-prussblue font-bold">
                Sign in with LinkedIn
              </h1>
            </a> */}
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <a
                href="#"
                className="text-xs text-center text-gray-500 uppercase"
              >
                or login with email
              </a>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email Address
              </label>
              <input
                title="email input"
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
                name="email"
                onChange={emailInputHandler}
                value={email}
              />
            </div>
            <div className="mt-4 mb-2">
              <div className="flex justify-between">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Password
                </label>
                <a href="#" className="text-xs text-gray-500">
                  Forget Password?
                </a>
              </div>
              <input
                title="password input"
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
                name="password"
                onChange={passwordInputHandler}
                value={password}
              />
            </div>
            <span className="mt-5 text-ired block sm:inline">{loginError}</span>
            <div className="mt-8">
              <button className="bg-prussblue text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                Login
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>

              <Link href="/signup">
                <a className="text-xs text-prussblue uppercase">or sign up</a>
              </Link>

              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
