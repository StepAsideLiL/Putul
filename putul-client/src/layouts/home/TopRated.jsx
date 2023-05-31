import PropTypes from "prop-types";
import { Link, useLoaderData } from "react-router-dom";
import H3 from "../../components/H3";
import { Rating } from "@smastrom/react-rating";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toastWarning } from "../../utils/toastMessage";

const TopRated = () => {
  const { ratingThree } = useLoaderData();

  return (
    <div className="space-y-5">
      <H3>Our Top Rated Action Figures</H3>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {ratingThree.map((figure) => (
          <TabBodyCard key={figure._id} figure={figure} />
        ))}
      </div>
    </div>
  );
};

const TabBodyCard = ({ figure }) => {
  const { user } = useContext(AuthContext);
  const { _id, toyName, picture, price, rating } = figure;

  const handleViewDetail = () => {
    if (!user) {
      toastWarning("You Must log in to see the details.");
    }
  };

  return (
    <div
      className="card card-compact bg-base-100 shadow-xl"
      data-aos="flip-right"
    >
      <figure className="h-[520px]">
        <img src={picture} alt={`Picture of ${toyName} figure`} />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{toyName}</h2>

        <p>
          Price <span className="font-bold">${price}</span>
        </p>

        <div className="flex items-center gap-2">
          <span>Rating: </span>
          <span>
            <Rating readOnly value={rating} style={{ maxWidth: 80 }} />
          </span>
          <span className="font-bold">{rating}</span>
        </div>

        <div className="card-actions justify-end">
          <Link to={`/toy/${_id}`}>
            <button className="btn-primary btn" onClick={handleViewDetail}>
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

TabBodyCard.propTypes = {
  figure: PropTypes.object.isRequired,
};

export default TopRated;
