import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Table from "../components/ui/Table/Table";
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
    company: "Google",
    dateSaved: "May 26, 2019",
    status: "OFFER",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png",
  },
  {
    id: "j2",
    jobPosition: "Senior Full Stack Developer",
    lastUpdated: "Updated 1 day ago",
    company: "Google",
    dateSaved: "May 26, 2019",
    status: "OFFER",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png",
  },
  {
    id: "j3",
    jobPosition: "Senior Full Stack Developer",
    lastUpdated: "Updated 1 day ago",
    company: "Google",
    dateSaved: "May 26, 2019",
    status: "OFFER",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png",
  },
  {
    id: "j4",
    jobPosition: "Senior Full Stack Developer",
    lastUpdated: "Updated 1 day ago",
    company: "Google",
    dateSaved: "May 26, 2019",
    status: "OFFER",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png",
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
  // More people...
];

const Home: NextPage = () => {
  return <Table jobApps={jobApps} />;
};

export default Home;
