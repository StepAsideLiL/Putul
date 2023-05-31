import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";

export const MyToyEditDataContext = createContext(null);

const MyToyEditDataProvider = ({ children }) => {
  const myFigure = useLoaderData();
  const [figure, setFigure] = useState(myFigure);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(figure.subcategory);

  useEffect(() => {
    fetch("https://putul-server.vercel.app/v1/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const myToyEditData = {
    figure,
    setFigure,
    categories,
    category,
    setCategory,
  };

  return (
    <MyToyEditDataContext.Provider value={myToyEditData}>
      {children}
    </MyToyEditDataContext.Provider>
  );
};

MyToyEditDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyToyEditDataProvider;
