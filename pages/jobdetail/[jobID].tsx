import { useState, useCallback, useRef, ReactElement } from "react";
import Form from "../../components/Form/Form";
import Layout from "../../components/layout/Layout";
import ArrowsStepper from "../../components/ui/ArrowsStepper";
import RatingStars from "../../components/ui/Icon/RatingStars";
import styles from "./[jobID].module.css";

const JobDetail = () => {
  let rating = 3;
  let styleName = [];

  for (let star = 0; star < 5; star++) {
    if (star + 1 <= rating) {
      styleName.push("text-yellow-500");
    } else {
      styleName.push("text-gray-500");
    }
  }

  return (
    // <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
    //   <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
    // <div className="rounded-t mb-0 px-4 pt-6 pb-8 border-0">
    <div className=" md:p-8 mb-6">
      <div className="flex flex-wrap items-center">
        <div className="relative w-full  max-w-full flex-grow flex-1">
          <h3 className="font-semibold text-base md:text-lg lg:text-2xl text-blueGray-700">
            Software Engineer
          </h3>
          <p className="font-semibold text-sm md:text-base text-blueGray-700">
            Google
          </p>
        </div>

        <div className="flex items-center">
          <img
            className="h-8 w-8 rounded-full mr-3"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png"
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
        <ArrowsStepper />
      </div>
      <Form />
    </div>
    // </div> */

    //   </div>
    // </div>
  );
};

export default JobDetail;

JobDetail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
