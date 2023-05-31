import { useContext, useState } from "react";
import { MyToysDataContext } from "../../providers/MyToysDataProvider";
import MyToyTableRowData from "../../components/MyToyTableRowData";
import { AuthContext } from "../../providers/AuthProvider";

const MyFiguresTable = () => {
  const { user } = useContext(AuthContext);
  const { figures, setFigures } = useContext(MyToysDataContext);
  const [sortOrder, setSortOrder] = useState(1);

  const handleAccending = () => {
    setSortOrder(1);

    fetch(
      `https://putul-server.vercel.app/v1/figures/user/${user.email}?sort=${sortOrder}`
    )
      .then((res) => res.json())
      .then((data) => setFigures(data));
  };

  const handleDeccending = () => {
    setSortOrder(-1);

    fetch(
      `https://putul-server.vercel.app/v1/figures/user/${user.email}?sort=${sortOrder}`
    )
      .then((res) => res.json())
      .then((data) => setFigures(data));
  };

  const headRow = (
    <tr>
      <th></th>
      <th>Seller</th>
      <th>Toy Name</th>
      <th>Sub-category</th>
      <th>Price</th>
      <th>Available Quantity</th>
      <th></th>
    </tr>
  );

  return (
    <div className="space-y-5">
      <div className="space-x-2 text-center">
        <button className="btn-outline btn" onClick={handleAccending}>
          Accending Order
        </button>
        <button className="btn-outline btn" onClick={handleDeccending}>
          Deccending Order
        </button>
      </div>

      <div className="mx-auto w-10/12 overflow-x-auto">
        <table className="table w-full">
          {/* Head Start */}
          <thead>{headRow}</thead>
          {/* Head End */}

          {/* Body Start */}
          <tbody>
            {figures.map((figure) => (
              <MyToyTableRowData key={figure._id} figure={figure} />
            ))}
          </tbody>
          {/* Body End */}

          {/* Foot Start */}
          <tfoot>{headRow}</tfoot>
          {/* Foot End */}
        </table>
      </div>
    </div>
  );
};

export default MyFiguresTable;
