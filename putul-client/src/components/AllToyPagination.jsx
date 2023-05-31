import { useContext } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { AllToysDataContext } from "../providers/AllToysDataProvider";

const AllToyPagination = () => {
  const {
    currentPage,
    setCurrentPage,
    itemPerPage,
    setItemPerPage,
    totalPages,
    totalPagesArray,
  } = useContext(AllToysDataContext);

  const handlePaginationLeft = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePaginationRight = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="space-y-3">
      <div>
        <p>
          Page <span className="font-bold">{currentPage + 1}</span> of{" "}
          <span className="font-bold">{totalPages}</span>
        </p>
      </div>

      <div className="btn-group">
        <button className="btn" onClick={handlePaginationLeft}>
          <BsChevronLeft />
        </button>

        {totalPagesArray.map((btn) => (
          <button
            className={
              btn === currentPage ? "btn-active btn-md btn" : "btn-md btn"
            }
            key={btn}
            onClick={() => setCurrentPage(btn)}
          >
            {btn + 1}
          </button>
        ))}

        <button className="btn" onClick={handlePaginationRight}>
          <BsChevronRight />
        </button>
      </div>

      <br />

      <select
        className="select-bordered select max-w-xs"
        value={itemPerPage}
        onChange={(event) => setItemPerPage(event.target.value)}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>
    </div>
  );
};

export default AllToyPagination;
