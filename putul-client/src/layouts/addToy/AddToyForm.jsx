import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import SelectCategory from "../../components/SelectCategory";
import Swal from "sweetalert2";
import { toastError } from "../../utils/toastMessage";
import { AddToyDataContext } from "../../providers/AddToyDataProvider";

const AddToyForm = () => {
  const {
    user: { displayName, email },
  } = useContext(AuthContext);

  const { categories, category, setCategory } = useContext(AddToyDataContext);

  const handleToySubmission = (event) => {
    event.preventDefault();

    const formData = {
      picture: event.target.picture.value,
      toyName: event.target.toyName.value,
      sellerName: event.target.sellerName.value,
      sellerEmail: event.target.sellerEmail.value,
      subcategory: event.target.subcategory.value,
      price: parseFloat(event.target.price.value),
      rating: parseFloat(event.target.rating.value),
      availableQuantity: parseInt(event.target.availableQuantity.value),
      detailDescription: event.target.detailDescription.value,
    };

    fetch("https://putul-server.vercel.app/v1/figures", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Data Added",
          });
          event.target.reset();
        } else {
          toastError("Data insertion failed!");
        }
      });
  };

  return (
    <div className="mx-auto w-full md:w-[570px]">
      <form onSubmit={handleToySubmission}>
        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Picture URL of the toy</span>
              </label>
              <input
                type="url"
                name="picture"
                placeholder="Picture URL"
                className="input-bordered input"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Title</span>
              </label>
              <input
                type="text"
                name="toyName"
                placeholder="Toy Title"
                className="input-bordered input"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                name="sellerName"
                defaultValue={displayName}
                disabled
                placeholder="Seller Name"
                className="input-bordered input"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <input
                type="email"
                name="sellerEmail"
                defaultValue={email}
                disabled
                placeholder="Seller Email"
                className="input-bordered input"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Sub-category</span>
              </label>
              <SelectCategory
                categories={categories}
                category={category}
                setCategory={setCategory}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input-bordered input"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                name="rating"
                placeholder="Rating"
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
                className="textarea-bordered textarea"
                placeholder="Detail description"
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button className="btn-primary btn" type="submit">
                Add Toy
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddToyForm;
