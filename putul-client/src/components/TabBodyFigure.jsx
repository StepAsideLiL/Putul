import { Rating } from "@smastrom/react-rating";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toastWarning } from "../utils/toastMessage";

const TabBodyFigure = ({ subcategory }) => {
  const [figures, setFigures] = useState([]);

  useEffect(() => {
    fetch(`https://putul-server.vercel.app/v1/category/${subcategory}?limit=3`)
      .then((res) => res.json())
      .then((data) => setFigures(data));
  }, [subcategory]);

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {figures.map((figure) => (
        <TabBodyCard key={figure._id} figure={figure} />
      ))}
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
      className="card card-compact bg-base-100 text-left shadow-xl"
      data-aos="flip-left"
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

TabBodyFigure.propTypes = {
  subcategory: PropTypes.string.isRequired,
};

TabBodyCard.propTypes = {
  figure: PropTypes.object.isRequired,
};

export default TabBodyFigure;
