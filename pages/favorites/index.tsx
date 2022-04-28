import type { NextPage } from "next";
import { ReactElement } from "react";
import Layout from "../../components/layout/Layout";
import Table from "../../components/ui/Table/Table";
import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";

const Favorites: NextPage = () => {
  return <Table query="fav" />;
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

export default Favorites;
