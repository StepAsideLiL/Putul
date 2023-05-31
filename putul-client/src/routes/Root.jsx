import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const Root = () => {
  return (
    <div>
      <div className="container mx-auto px-5 md:px-0">
        <Header />

        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Root;
