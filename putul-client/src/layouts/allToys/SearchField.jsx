import { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { AllToysDataContext } from "../../providers/AllToysDataProvider";

const SearchField = () => {
  const { setSearchQuery } = useContext(AllToysDataContext);

  const handleSearch = (event) => {
    event.preventDefault();

    const query = event.target.query.value;

    setSearchQuery(query);
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="form-control">
        <div className="input-group">
          <input
            type="text"
            name="query"
            placeholder="Search…"
            className="input-bordered input w-full"
          />
          <button className="btn-square btn" type="submit">
            <BsSearch />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchField;
