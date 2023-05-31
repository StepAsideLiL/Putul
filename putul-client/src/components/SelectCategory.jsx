import PropTypes from "prop-types";

const SelectCategory = ({ categories, category, setCategory }) => {
  return (
    <div className="flex gap-1">
      <select
        defaultValue={category}
        className="select-bordered select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="custom">Custom Category</option>
        {categories.map((categorie) => (
          <option key={categorie._id} value={categorie.subcategory}>
            {categorie.subcategory}
          </option>
        ))}
      </select>

      {category === "custom" ? (
        <input
          type="text"
          name="subcategory"
          placeholder="Sub-category"
          className="input-bordered input w-full"
        />
      ) : (
        <input
          type="text"
          name="subcategory"
          value={category}
          readOnly
          placeholder="Sub-category"
          className="input-bordered input w-full"
        />
      )}
    </div>
  );
};

SelectCategory.propTypes = {
  categories: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default SelectCategory;
