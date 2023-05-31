import PropTypes from "prop-types";

const H3 = ({ children }) => {
  return (
    <>
      <h1 className="text-center text-2xl font-bold">{children}</h1>
    </>
  );
};

H3.propTypes = {
  children: PropTypes.string.isRequired,
};

export default H3;
