const Form = () => {
  return (
    <form>
      <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
        Basic Information
      </h6>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-6/12 px-4">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Company
            </label>
            <input
              type="text"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Google"
            />
          </div>
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Job Title
            </label>
            <input
              type="text"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Software Engineer"
            />
          </div>
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Job Url
            </label>
            <input
              type="text"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="https://url.com/jobs/google/softwareengineer"
            />
          </div>
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Location
            </label>
            <input
              type="text"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Toronto, CA"
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
              htmlFor="grid-password"
            >
              Deadline
            </label>
            <input
              type="date"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="02/02/2022"
            />
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Estimated Salary (Levels)
            </label>
            <input
              type="number"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="150000"
            />
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Official Salary
            </label>
            <input
              type="number"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="180000"
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
              htmlFor="grid-password"
            >
              Job Description
            </label>
            <textarea
              title="job description"
              type="text"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              rows="4"
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
