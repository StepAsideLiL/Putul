import { useContext } from "react";
import { MyToyEditDataContext } from "../../providers/MyToyEditDataProvider";
import Swal from "sweetalert2";
import { toastError } from "../../utils/toastMessage";
import { useNavigate } from "react-router-dom";

const EditToyForm = () => {
  const { figure } = useContext(MyToyEditDataContext);
  const { _id, price, availableQuantity, detailDescription } = figure;
  const navigate = useNavigate();

  const handleToyEdit = (event) => {
    event.preventDefault();

    const formData = {
      price: event.target.price.value,
      availableQuantity: event.target.availableQuantity.value,
      detailDescription: event.target.detailDescription.value,
    };

    fetch(`https://putul-server.vercel.app/v1/figures/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Data Updated",
          });
          navigate("/my-toys");
        } else {
          toastError("Data could not update!");
        }
      });
  };

  return (
    <div className="mx-auto w-full md:w-[570px]">
      <form onSubmit={handleToyEdit}>
        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="Price"
                className="input-bordered input"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Available quantity</span>
              </label>
              <input
                type="number"
                name="availableQuantity"
                defaultValue={availableQuantity}
                placeholder="Available quantity"
                className="input-bordered input"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Detail description</span>
              </label>
              <textarea
                name="detailDescription"
                defaultValue={detailDescription}
                className="textarea-bordered textarea"
                placeholder="Detail description"
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button className="btn-primary btn" type="submit">
                Update
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditToyForm;
