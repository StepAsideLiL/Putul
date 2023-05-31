import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { useLoaderData } from "react-router-dom";

export const AddToyDataContext = createContext(null);

const AddToyDataProvider = ({ children }) => {
  const categories = useLoaderData();

  const [category, setCategory] = useState("custom");

  const AddToysData = {
    categories,
    category,
    setCategory,
  };

  return (
    <AddToyDataContext.Provider value={AddToysData}>
      {children}
    </AddToyDataContext.Provider>
  );
};

AddToyDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AddToyDataProvider;
