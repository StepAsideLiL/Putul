import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "./AuthProvider";

export const MyToysDataContext = createContext(null);

const MyToysDataProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [figures, setFigures] = useState([]);

  useEffect(() => {
    fetch(`https://putul-server.vercel.app/v1/figures/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => setFigures(data));
  }, [user.email]);

  const myToyData = { figures, setFigures };

  return (
    <MyToysDataContext.Provider value={myToyData}>
      {children}
    </MyToysDataContext.Provider>
  );
};

MyToysDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyToysDataProvider;
