import { NavLink } from "react-router-dom";

const MenuList = () => {
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/all-toys">All Toys</NavLink>
      </li>

      <li>
        <NavLink to="/my-toys">My Toys</NavLink>
      </li>

      <li>
        <NavLink to="/add-a-toy">Add A Toy</NavLink>
      </li>

      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
    </>
  );
};

export default MenuList;
