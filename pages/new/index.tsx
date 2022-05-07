import Form from "../../components/Form/Form";
import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

const NewApplication = () => {
  const router = useRouter();

  const updateDataHandler = async (formData: {}) => {
    //send user info to backend to add user to database
    const res = await fetch("/api/jobapp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formData,
      }),
    });

    const returnData = await res.json();
    const statusCode = res.status;

    if (statusCode === 201) {
      router.push(`/jobdetail/${returnData.data.insertedId}`);
    }
  };

  return (
    <div className=" md:p-8 mb-6">
      <div className="flex flex-wrap items-center mb-6">
        <div className="relative w-full  max-w-full flex-grow flex-1">
          <h1 className="font-semibold text-base md:text-lg lg:text-2xl text-prussblue">
            New Job Application
          </h1>
        </div>
      </div>
      <Form data={null} edit={true} updateHandler={updateDataHandler} />
      {/* <button className=" absolute bottom-7 right-20 p-2 my-2 bg-blue-500 text-white rounded-md focus:outline-none focus:ring-2 ring-blue-300 ring-offset-2">
        Submit
      </button> */}
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

export default NewApplication;

// NewApplication.getLayout = function getLayout(page: ReactElement) {
//   return page;
// };
