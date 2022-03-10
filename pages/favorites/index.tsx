import type { NextPage } from "next";
import { ReactElement } from "react";
import Layout from "../../components/layout/Layout";
import Table from "../../components/ui/Table/Table";
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

const Favorites: NextPage = () => {
  return <Table query="fav" />;
};

export default Favorites;
