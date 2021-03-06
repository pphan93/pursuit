import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout/Layout";
import Table from "../components/ui/Table/Table";
import { ReactElement, useEffect } from "react";
import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";

// import Layout from "../components/layout/Layout";
// import styles from "../styles/Home.module.css";

// type jobAppsType = {
//   id: string;
//   jobPosition: string;
//   lastUpdated: string;
//   company: string;
//   dateSaved: string;
//   status: string;
//   logo: string;
// }[];

const jobApps = [
  {
    id: "j1",
    jobPosition: "Senior Full Stack Developer",
    lastUpdated: "Updated 1 day ago",
    company: "Facebook",
    dateSaved: "May 26, 2019",
    status: "OFFER",
    logo: "https://logo.clearbit.com/facebook.com",
  },
  {
    id: "j2",
    jobPosition: "Senior Full Stack Developer",
    lastUpdated: "Updated 1 day ago",
    company: "Google",
    dateSaved: "May 26, 2019",
    status: "OFFER",
    logo: "https://logo.clearbit.com/google.com",
  },
  {
    id: "j3",
    jobPosition: "Senior Full Stack Developer",
    lastUpdated: "Updated 1 day ago",
    company: "Amazon",
    dateSaved: "May 26, 2019",
    status: "OFFER",
    logo: "https://logo.clearbit.com/amazon.com",
  },
  {
    id: "j4",
    jobPosition: "Senior Full Stack Developer",
    lastUpdated: "Updated 1 day ago",
    company: "Equitable Bank",
    dateSaved: "May 26, 2019",
    status: "OFFER",
    logo: "https://logo.clearbit.com/equitablebank.ca?size=250",
  },
  {
    id: "j5",
    jobPosition: "Senior Full Stack Developer",
    lastUpdated: "Updated 1 day ago",
    company: "Google",
    dateSaved: "May 26, 2019",
    status: "OFFER",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png",
  },
  {
    id: "j6",
    jobPosition: "Senior Full Stack Developer",
    lastUpdated: "Updated 1 day ago",
    company: "Google",
    dateSaved: "May 26, 2019",
    status: "OFFER",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png",
  },
  {
    id: "j7",
    jobPosition: "Senior Full Stack Developer",
    lastUpdated: "Updated 1 day ago",
    company: "Google",
    dateSaved: "May 26, 2019",
    status: "OFFER",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png",
  },
  {
    id: "j8",
    jobPosition: "Senior Full Stack Developer",
    lastUpdated: "Updated 1 day ago",
    company: "Google",
    dateSaved: "May 26, 2019",
    status: "OFFER",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png",
  },
  {
    id: "j9",
    jobPosition: "Senior Full Stack Developer",
    lastUpdated: "Updated 1 day ago",
    company: "Google",
    dateSaved: "May 26, 2019",
    status: "OFFER",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png",
  },
  {
    id: "j10",
    jobPosition: "Senior Full Stack Developer",
    lastUpdated: "Updated 1 day ago",
    company: "Google",
    dateSaved: "May 26, 2019",
    status: "OFFER",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png",
  },
  {
    id: "j11",
    jobPosition: "Senior Full Stack Developer",
    lastUpdated: "Updated 1 day ago",
    company: "Google",
    dateSaved: "May 26, 2019",
    status: "OFFER",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png",
  },
  {
    id: "j12",
    jobPosition: "Senior Full Stack Developer",
    lastUpdated: "Updated 1 day ago",
    company: "Google",
    dateSaved: "May 26, 2019",
    status: "OFFER",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png",
  },
  {
    id: "j13",
    jobPosition: "Senior Full Stack Developer",
    lastUpdated: "Updated 1 day ago",
    company: "Google",
    dateSaved: "May 26, 2019",
    status: "OFFER",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png",
  },
  {
    id: "j14",
    jobPosition: "Senior Full Stack Developer",
    lastUpdated: "Updated 1 day ago",
    company: "Google",
    dateSaved: "May 26, 2019",
    status: "OFFER",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png",
  },
  {
    id: "j15",
    jobPosition: "Senior Full Stack Developer",
    lastUpdated: "Updated 1 day ago",
    company: "Google",
    dateSaved: "May 26, 2019",
    status: "OFFER",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png",
  },
  {
    id: "j16",
    jobPosition: "Senior Full Stack Developer",
    lastUpdated: "Updated 1 day ago",
    company: "Google",
    dateSaved: "May 26, 2019",
    status: "OFFER",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png",
  },
  {
    id: "j17",
    jobPosition: "Senior Full Stack Developer",
    lastUpdated: "Updated 1 day ago",
    company: "Google",
    dateSaved: "May 26, 2019",
    status: "OFFER",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png",
  },
  {
    id: "j18",
    jobPosition: "Senior Full Stack Developer",
    lastUpdated: "Updated 1 day ago",
    company: "Google",
    dateSaved: "May 26, 2019",
    status: "OFFER",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png",
  },
  {
    id: "j19",
    jobPosition: "Senior Full Stack Developer",
    lastUpdated: "Updated 1 day ago",
    company: "Google",
    dateSaved: "May 26, 2019",
    status: "OFFER",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png",
  },
  {
    id: "j20",
    jobPosition: "Senior Full Stack Developer",
    lastUpdated: "Updated 1 day ago",
    company: "Google",
    dateSaved: "May 26, 2019",
    status: "OFFER",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png",
  },
  {
    id: "j21",
    jobPosition: "Senior Full Stack Developer",
    lastUpdated: "Updated 1 day ago",
    company: "Google",
    dateSaved: "May 26, 2019",
    status: "OFFER",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png",
  },
  {
    id: "j22",
    jobPosition: "Senior Full Stack Developer",
    lastUpdated: "Updated 1 day ago",
    company: "Google",
    dateSaved: "May 26, 2019",
    status: "OFFER",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png",
  },
  {
    id: "j23",
    jobPosition: "Senior Full Stack Developer",
    lastUpdated: "Updated 1 day ago",
    company: "Google",
    dateSaved: "May 26, 2019",
    status: "OFFER",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png",
  },
  {
    id: "j24",
    jobPosition: "Senior Full Stack Developer",
    lastUpdated: "Updated 1 day ago",
    company: "Google",
    dateSaved: "May 26, 2019",
    status: "OFFER",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png",
  },
  {
    id: "j25",
    jobPosition: "Senior Full Stack Developer",
    lastUpdated: "Updated 1 day ago",
    company: "Google",
    dateSaved: "May 26, 2019",
    status: "OFFER",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png",
  },
  // More people...
];

// const fetcher = (url) => fetch(url).then((r) => r.json());

const Home: NextPage = () => {
  // console.log(message.data);

  return (
    <>
      {/* <Loading /> */}
      <Table query="All" />
    </>
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

export default Home;

// Home.getLayout = function getLayout(page: ReactElement) {
//   return <Layout>{page}</Layout>;
// };
