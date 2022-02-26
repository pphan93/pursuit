import SplashPage from "../../components/LandingPage/LandingPage";
import type { ReactElement } from "react";

const Landing = () => {
  return <SplashPage />;
};

export default Landing;

Landing.getLayout = (page: ReactElement) => page;
