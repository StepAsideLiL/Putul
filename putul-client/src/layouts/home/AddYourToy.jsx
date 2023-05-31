import { Link } from "react-router-dom";

const AddYourToy = () => {
  return (
    <div className="card card-normal mx-auto max-w-lg bg-base-100 shadow-xl sm:card-side">
      <figure>
        <img
          src="https://images2.imgbox.com/f6/05/VE2jLx9R_o.jpg"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Add Your Own Figure</h2>
        <p>
          You can add your own action figures and let other see the magnificent
          work of art.
        </p>
        <div className="card-actions justify-end">
          <Link to="/add-a-toy">
            <button className="btn-primary btn">Add Figure</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddYourToy;
