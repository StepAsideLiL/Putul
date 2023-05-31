import { useContext } from "react";
import AllToyPagination from "../../components/AllToyPagination";
import TableRowData from "../../components/TableRowData";
import { AllToysDataContext } from "../../providers/AllToysDataProvider";

const FiguresTable = () => {
  const { figures } = useContext(AllToysDataContext);

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
      <div className="mx-auto w-10/12 overflow-x-auto">
        <table className="table w-full">
          {/* Head Start */}
          <thead>{headRow}</thead>
          {/* Head End */}

          {/* Body Start */}
          <tbody>
            {figures.map((figure) => (
              <TableRowData key={figure._id} figure={figure} />
            ))}
          </tbody>
          {/* Body End */}

          {/* Foot Start */}
          <tfoot>{headRow}</tfoot>
          {/* Foot End */}
        </table>
      </div>

      <div className="text-center">
        <AllToyPagination />
      </div>
    </div>
  );
};

export default FiguresTable;
