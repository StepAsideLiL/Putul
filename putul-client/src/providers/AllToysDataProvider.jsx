import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export const AllToysDataContext = createContext(null);

const AllToysDataProvider = ({ children }) => {
  const {
    figuresData,
    totalFigureData: { totalFigures },
  } = useLoaderData();

  const [figures, setfigures] = useState(figuresData);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(20);
  const [searchQuery, setSearchQuery] = useState("");

  const totalPages = Math.ceil(totalFigures / itemPerPage);

  const totalPagesArray = [...Array(totalPages).keys()];

  useEffect(() => {
    fetch(
      `https://putul-server.vercel.app/v1/figures?page=${currentPage}&limit=${itemPerPage}&search=${searchQuery}`
    )
      .then((res) => res.json())
      .then((data) => setfigures(data));
  }, [currentPage, itemPerPage, searchQuery]);

  const allToysData = {
    figures,
    setfigures,
    currentPage,
    setCurrentPage,
    itemPerPage,
    searchQuery,
    setSearchQuery,
    setItemPerPage,
    totalPages,
    totalPagesArray,
  };

  return (
    <AllToysDataContext.Provider value={allToysData}>
      {children}
    </AllToysDataContext.Provider>
  );
};

AllToysDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AllToysDataProvider;
