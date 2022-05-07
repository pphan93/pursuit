import { useState, useEffect } from "react";
import Form from "../../components/Form/Form";
import ArrowsStepper from "../../components/ui/ArrowsStepper";
import RatingStars from "../../components/ui/Icon/RatingStars";
import { useRouter } from "next/router";
import Loading from "../../components/ui/Loading";
import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { Edit } from "iconsax-react";
import useSWR, { useSWRConfig } from "swr";

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
  const { mutate } = useSWRConfig();

  const { jobID } = router.query;
  const [status, setStatus] = useState<
    { status: string | null; name: string }[]
  >([]);

  const [edit, setEdit] = useState(false);

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

  //hard cord the company rating until figure out where to pull the info
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

  //status update
  const onClickHandler = (value: string | null): void => {
    //progress in the steppers
    const existingItems = [...status];

    const current = existingItems.findIndex(
      (item: { name: string; status: string | null }) => item.name === value
    );

    //create an object to store in db
    const updatedItem = existingItems.map(
      (item: { name: string; status: string | null }, index) => {
        return item.name === value && item.name !== "Accepted"
          ? { ...item, status: "Active", lastModified: new Date() }
          : current < index
          ? { ...item, status: null }
          : item.name === "Accepted"
          ? { ...item, status: "Completed", lastModified: new Date() }
          : item.status === "Completed"
          ? { ...item }
          : { ...item, status: "Completed", lastModified: new Date() };
      }
    );

    const updateStatusAPI = async () => {
      const res = await fetch(`/api/jobapp/${jobID}?update=status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          updatedItem,
        }),
      });

      const updateRes = await res.json();

      const statusCode = res.status;
      if (statusCode === 200) {
        setStatus(updateRes.data);
      }
    };

    updateStatusAPI();
  };

  const updateDataHandler = async (formData: {}) => {
    const res = await fetch(`/api/jobapp/${jobID}?update=all`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formData,
      }),
    });

    const returnData = await res.json();
    const statusCode = res.status;

    if (statusCode === 200) {
      console.log("test");
      setEdit(false);
      mutate(`/jobdetail/${jobID}`);
    }
  };

  //Show the active status for mobile version (use selector instead of arrow steppers), if reject show rejected
  //refactor to fix typescript
  let statusSelect = "";

  if (status !== undefined) {
    const active = status.find((item) => item.status === "Active");
    const rejected = status.find((item) => item.status === "Rejected");
    if (active !== undefined) {
      statusSelect = active.name;
    } else if (rejected !== undefined) {
      statusSelect = "Rejected";
    }
  }

  return (
    <div className=" md:p-8 mb-6">
      <div className="flex flex-wrap items-center">
        <div className="relative w-1/4 mr-20  max-w-full flex-grow flex-1">
          <span className="flex items-center">
            <h3 className="truncate w-auto font-semibold text-base md:text-lg lg:text-2xl text-prussblue">
              {data.data.jobTitle}
            </h3>
            <span
              onClick={() => {
                setEdit((prev) => !prev);
              }}
              className="ml-3  w-5 cursor-pointer text-cblue hover:text-gray-600"
            >
              <Edit size={20} />
            </span>
          </span>
          <p className="font-semibold text-sm md:text-base text-prussblue">
            {data.data.company.name}
          </p>
        </div>

        <div className="flex items-center">
          <img
            className="h-8 w-8 rounded-full mr-3"
            src={`https://logo.clearbit.com/${data.data.company.name.toLowerCase()}.com`}
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
              value={statusSelect}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>): void =>
                onClickHandler(e.target.value)
              }
            >
              <option>Applied</option>
              <option>Interview 1</option>
              <option>Take Home</option>
              <option>Interview 2</option>
              <option>Offered</option>
              <option>Accepted</option>
              <option>Rejected</option>
            </select>
          </div>
        </div>
        <ArrowsStepper status={status} onClickArrow={onClickHandler} />
      </div>
      {data ? (
        <Form data={data.data} edit={edit} updateHandler={updateDataHandler} />
      ) : null}
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
