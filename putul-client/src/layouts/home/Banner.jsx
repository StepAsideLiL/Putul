import { Link } from "react-router-dom";
import bannerImage from "../../assets/images/action-figure-cover.png";

const Banner = () => {
  return (
    <div
      data-aos="zoom-in"
      className="hero min-h-screen"
      style={{ backgroundImage: `url("${bannerImage}")` }}
    >
      <div className="hero-overlay bg-opacity-75"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Find Your Favourite Action Figure
          </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to="/all-toys">
            <button className="btn-primary btn">All Toys</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
