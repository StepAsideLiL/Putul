import PropTypes from "prop-types";
import { useContext } from "react";
import { BsFillTrashFill, BsPencilSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MyToysDataContext } from "../providers/MyToysDataProvider";
import Swal from "sweetalert2";
import { toastError } from "../utils/toastMessage";

const MyToyTableRowData = ({ figure }) => {
  const { figures, setFigures } = useContext(MyToysDataContext);

  const {
    _id,
    picture,
    sellerName,
    toyName,
    subcategory,
    price,
    availableQuantity,
  } = figure;

  const handleDelete = (figureId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "success");
        fetch(`https://putul-server.vercel.app/v1/figures/${figureId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              setFigures(figures.filter((figure) => figure._id !== figureId));
            } else {
              toastError("Can not delete data");
            }
            console.log(data);
          });
      }
    });
  };

  return (
    <tr>
      <td>
        <div className="avatar h-12">
          <div className="mask h-full">
            <img src={picture} alt={`Picture of ${toyName}`} />
          </div>
        </div>
      </td>
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{subcategory}</td>
      <td>${price}</td>
      <td>{availableQuantity}</td>
      <td className="flex items-center space-x-1">
        <Link to={`/toy/${_id}`}>
          <button className="btn-outline btn">details</button>
        </Link>
        <Link to={`/my-toys/edit/${_id}`}>
          <button className="btn-outline btn">
            <BsPencilSquare className="text-xl" />
          </button>
        </Link>
        <button
          className="btn-outline btn text-error"
          onClick={() => handleDelete(_id)}
        >
          <BsFillTrashFill className="text-xl" />
        </button>
      </td>
    </tr>
  );
};

MyToyTableRowData.propTypes = {
  figure: PropTypes.object.isRequired,
};

export default MyToyTableRowData;
