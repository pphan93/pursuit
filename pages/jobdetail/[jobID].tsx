import {
  useState,
  useCallback,
  useRef,
  ReactElement,
  useEffect,
  ChangeEvent,
} from "react";
import Form from "../../components/Form/Form";
import Layout from "../../components/layout/Layout";
import ArrowsStepper from "../../components/ui/ArrowsStepper";
import RatingStars from "../../components/ui/Icon/RatingStars";
import styles from "./[jobID].module.css";
import useSWR from "swr";
import { useRouter } from "next/router";

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

interface ApiData {
  message: string;
  data: {
    _id: string;
    userId: string;
    company: {
      name: string;
      location: string;
    };
    createdDate: Date;
    deadline: Date;
    estimatedSalary: number;
  };
  total: number;
}

// interface Error {
//   error: string
// }

// interface API {
//   data: ApiData,
//   error: Error
// }

const JobDetail = () => {
  const router = useRouter();
  const { jobID } = router.query;
  const [status, setStatus] = useState<
    { status: string | null; name: string }[]
  >([]);
  const { data, error }: any = useSWR(`/api/jobapp/${jobID}`, fetcher, {
    loadingTimeout: 3000,
  });

  useEffect(() => {
    if (data) {
      setStatus(data.data.applicationStatus);
    }
  }, [data]);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>Loading</div>;

  // useEffect(() => {
  //   setStatus(data.data.applicationStatus);
  // }, [data]);

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

  console.log(data);

  const onClickHandler = (value: string | null): void => {
    //progress in the steppers

    const existingItems = [...status];

    const current = existingItems.findIndex(
      (item: { name: string; status: string | null }) => item.name === value
    );
    const updatedItem = existingItems.map(
      (item: { name: string; status: string | null }, index) => {
        return item.name === value && item.name !== "Accepted"
          ? { ...item, status: "Active" }
          : current < index
          ? { ...item, status: null }
          : item.name === "Accepted"
          ? { ...item, status: "Completed" }
          : { ...item, status: "Completed" };
      }
    );

    setStatus(updatedItem);

    const updateStatusAPI = async () => {
      const res = await fetch(`/api/jobapp/${jobID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          updatedItem,
        }),
      });

      console.log(res);

      const updateRes = await res.json();
      const statusCode = res.status;
      console.log(updateRes);
    };

    updateStatusAPI();

    // if (statusCode === 201) {
    //   router.push(`/jobdetail/${data.insertedId}`);
    // }

    // setStatus((existingItems) => {
    //   const current = existingItems.findIndex(
    //     (item) => item.name === e.target.textContent
    //   );
    //   return existingItems.map((item, index) => {
    //     return item.name === e.target.textContent && item.name !== "Accepted"
    //       ? { ...item, status: "Active" }
    //       : current < index
    //       ? { ...item, status: null }
    //       : item.name === "Accepted"
    //       ? { ...item, status: "Completed" }
    //       : { ...item, status: "Completed" };
    //   });
    // });
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
