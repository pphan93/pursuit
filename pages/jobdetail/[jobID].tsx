import {
  useState,
  useCallback,
  useRef,
  ReactElement,
  useEffect,
  ChangeEvent,
} from "react";
import Form from "../../components/Form/Form";
import ArrowsStepper from "../../components/ui/ArrowsStepper";
import RatingStars from "../../components/ui/Icon/RatingStars";
import useSWR from "swr";
import { useRouter } from "next/router";
import Loading from "../../components/ui/Loading";
import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";

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

const JobDetail = () => {
  const router = useRouter();
  const { jobID } = router.query;
  const [status, setStatus] = useState<
    { status: string | null; name: string }[]
  >([]);

  const { data, error }: any = useSWR(
    jobID ? `/api/jobapp/${jobID}` : null,
    jobID ? fetcher : null,
    {
      loadingTimeout: 3000,
    }
  );

  useEffect(() => {
    if (data) {
      setStatus(data.data.applicationStatus);
    }
  }, [data]);

  if (error) return <div>failed to load</div>;
  if (!data) return <Loading />;

  console.log(jobID);
  let rating = 3;
  let styleName = [];

  //Calculate the rating stars
  for (let star = 0; star < 5; star++) {
    if (star + 1 <= rating) {
      styleName.push("text-yellow");
    } else {
      styleName.push("text-prussblue");
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
    <div className=" md:p-8 mb-6">
      <div className="flex flex-wrap items-center">
        <div className="relative w-full  max-w-full flex-grow flex-1">
          <h3 className="font-semibold text-base md:text-lg lg:text-2xl text-prussblue">
            {data.data.jobTitle}
          </h3>
          <p className="font-semibold text-sm md:text-base text-prussblue">
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
                styleName={`mx-1 w-4 h-4 fill-current ${star}`}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full mt-5 mb-5">
        <div className="w-full lg:w-12/12 px-4">
          <div className="relative w-full mb-3">
            <select
              title="status"
              className="visible md:hidden border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              id="grid-state"
              name="applicationStatus"
              // value={userInput.applicationStatus}
              // onChange={onChangeSelectHandler}
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
        <ArrowsStepper status={status} onClickArrow={onClickHandler} />
      </div>
      {data ? <Form data={data.data} /> : null}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  console.log(session);
  if (!session) {
    return {
      redirect: {
        destination: "/landingpage",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default JobDetail;
