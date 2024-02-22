import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import FooterPage from "../components/FooterPage";
const HomeLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <FooterPage />
    </>
  );
};

export default HomeLayout;
