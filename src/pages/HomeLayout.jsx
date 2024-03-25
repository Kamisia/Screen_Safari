import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import FooterPage from "../components/FooterPage";
const HomeLayout = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <FooterPage />
    </div>
  );
};

export default HomeLayout;
