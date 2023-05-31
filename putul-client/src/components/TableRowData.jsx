import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TableRowData = ({ figure }) => {
  const {
    _id,
    picture,
    sellerName,
    toyName,
    subcategory,
    price,
    availableQuantity,
  } = figure;

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
      <td>
        <Link to={`/toy/${_id}`}>
          <button className="btn-outline btn">details</button>
        </Link>
      </td>
    </tr>
  );
};

TableRowData.propTypes = {
  figure: PropTypes.object.isRequired,
};

export default TableRowData;
