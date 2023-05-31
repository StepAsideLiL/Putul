import img404 from "../assets/images/404.png";
import { Link } from "react-router-dom";
import useDynamicTitle from "../utils/useDynamicTitle";

const Page404 = () => {
  useDynamicTitle("Putul - 404");

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 space-y-4 text-center">
            <h1 className="text-9xl font-bold">404</h1>
            <Link to="/" className="btn-outline btn-primary btn text-xl">
              Get Back to Home Page
            </Link>
          </div>

          <div className="w-1/2">
            <img
              src={img404}
              alt="404 image"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
