import { useRouter } from "next/router";
import React, { useState } from "react";

//declare a type for user input
type IInfo = {
  company: string;
  jobTitle: string;
  jobUrl: string;
  companyLocation: string;
  applicationStatus: string;
  deadline: string;
  jobDescription: string;
  estimatedSalary: number;
  officialSalary: number;
};

const Form = () => {
  const [userInput, setUserInput] = useState<IInfo>({
    company: "",
    jobTitle: "",
    jobUrl: "",
    companyLocation: "",
    applicationStatus: "Applied",
    deadline: "",
    jobDescription: "",
    estimatedSalary: 0,
    officialSalary: 0,
  } as IInfo);

  const router = useRouter();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setUserInput((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const onChangeSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = e.target;

    setUserInput((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //send user info to backend to add user to database
    const res = await fetch("/api/jobapp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userInput,
      }),
    });

    const data = await res.json();
    const statusCode = res.status;
    // console.log(data);

    if (statusCode === 201) {
      router.push(`/jobdetail/${data.insertedId}`);
    }
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
        Basic Information
      </h6>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-6/12 px-4">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="company"
            >
              Company
            </label>
            <input
              type="text"
              name="company"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Google"
              value={userInput.company}
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="jobTitle"
            >
              Job Title
            </label>
            <input
              type="text"
              name="jobTitle"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Software Engineer"
              value={userInput.jobTitle}
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="jobUrl"
            >
              Job Url
            </label>
            <input
              type="text"
              name="jobUrl"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="https://url.com/jobs/google/softwareengineer"
              value={userInput.jobUrl}
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="companyLocation"
            >
              Location
            </label>
            <input
              type="text"
              name="companyLocation"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Toronto, CA"
              value={userInput.companyLocation}
              onChange={onChangeHandler}
            />
          </div>
        </div>
      </div>

      <hr className="mt-6 border-b-1 border-blueGray-300" />

      <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
        More Information
      </h6>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <div className="relative w-full mb-3">
            <select
              title="status"
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              name="applicationStatus"
              value={userInput.applicationStatus}
              onChange={onChangeSelectHandler}
            >
              <option>Applied</option>
              <option>Interview 1</option>
              <option>Take Home</option>
              <option>Interview 2</option>
              <option>Offered</option>
              <option>Accepted</option>
            </select>
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="deadline"
            >
              Deadline
            </label>
            <input
              title="deadline"
              name="deadline"
              type="date"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="02/02/2022"
              value={userInput.deadline}
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="estimatedSalary"
            >
              Estimated Salary (Levels)
            </label>
            <input
              type="number"
              name="estimatedSalary"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="150000"
              value={userInput.estimatedSalary}
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="officialSalary"
            >
              Official Salary
            </label>
            <input
              type="number"
              name="officialSalary"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="180000"
              value={userInput.officialSalary}
              onChange={onChangeHandler}
            />
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oops!</span> Username already taken!
            </p>
          </div>
        </div>
      </div>

      <hr className="mt-6 border-b-1 border-blueGray-300" />

      <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
        Job Description
      </h6>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="jobDescription"
            >
              Job Description
            </label>
            <textarea
              title="job description"
              name="jobDescription"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              rows={3}
              value={userInput.jobDescription}
              onChange={onChangeHandler}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="md:col-span-5 text-right px-4">
        <div className="inline-flex items-end">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
