import { ReactElement } from "react";
import Form from "../../components/Form/Form";
import Layout from "../../components/layout/Layout";

const NewApplication = () => {
  return (
    <div className=" md:p-8 mb-6">
      <Form />
      {/* <button className=" absolute bottom-7 right-20 p-2 my-2 bg-blue-500 text-white rounded-md focus:outline-none focus:ring-2 ring-blue-300 ring-offset-2">
        Submit
      </button> */}
    </div>
  );
};

export default NewApplication;

NewApplication.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
