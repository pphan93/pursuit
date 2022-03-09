import { useState, useCallback, useRef, ReactElement } from "react";
import Form from "../../components/Form/Form";
import Layout from "../../components/layout/Layout";
import ArrowsStepper from "../../components/ui/ArrowsStepper";
import RatingStars from "../../components/ui/Icon/RatingStars";
import styles from "./[jobID].module.css";
import useSWR from "swr";
import { useRouter } from "next/router";

const statusData = [
  {
    name: "Applied",
    status: "Completed",
  },
  {
    name: "Interview 1",
    status: "Active",
  },
  {
    name: "Take Home",
    status: null,
  },
  {
    name: "Interview 2",
    status: null,
  },
  {
    name: "Offered",
    status: null,
  },
  {
    name: "Accepted",
    status: null,
  },
];

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

const JobDetail = () => {
  const router = useRouter();
  const { jobID } = router.query;
  const [status, setStatus] = useState(statusData);
  const { data, error } = useSWR(`/api/jobapp/${jobID}`, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>Loading</div>;

  console.log(jobID);
  let rating = 3;
  let styleName = [];

  //Calculate the rating stars
  for (let star = 0; star < 5; star++) {
    if (star + 1 <= rating) {
      styleName.push("text-yellow-500");
    } else {
      styleName.push("text-gray-500");
    }
  }

  console.log(data.data);

  const onClickHandler = (e) => {
    //progress in the steppers
    setStatus((existingItems) => {
      const current = existingItems.findIndex(
        (item) => item.name === e.target.textContent
      );
      return existingItems.map((item, index) => {
        return item.name === e.target.textContent
          ? { ...item, status: "Active" }
          : current < index
          ? { ...item, status: null }
          : { ...item, status: "Completed" };
      });
    });
  };

  return (
    // <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
    //   <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
    // <div className="rounded-t mb-0 px-4 pt-6 pb-8 border-0">
    <div className=" md:p-8 mb-6">
      <div className="flex flex-wrap items-center">
        <div className="relative w-full  max-w-full flex-grow flex-1">
          <h3 className="font-semibold text-base md:text-lg lg:text-2xl text-blueGray-700">
            {data.data.jobTitle}
          </h3>
          <p className="font-semibold text-sm md:text-base text-blueGray-700">
            {data.data.company.name}
          </p>
        </div>

        <div className="flex items-center">
          <img
            className="h-8 w-8 rounded-full mr-3"
            src={`https://logo.clearbit.com/${data.data.company.name}.com`}
          ></img>

          {/* Show the star for the company rating */}
          {styleName.map((star, idx) => {
            return (
              <RatingStars
                key={idx}
                styleName={`mx-1 w-4 h-4 fill-current text-yellow-500 ${star}`}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full mt-5 mb-5">
        <ArrowsStepper status={status} onClickArrow={onClickHandler} />
      </div>
      {data ? <Form data={data.data} /> : null}
    </div>
    // </div> */

    //   </div>
    // </div>
  );
};

export default JobDetail;
