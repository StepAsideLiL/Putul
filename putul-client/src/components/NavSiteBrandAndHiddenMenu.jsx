import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";
import MenuList from "./MenuList";
import logo from "../assets/logos/logo-white.png";

const NavSiteBrandAndHiddenMenu = () => {
  return (
    <>
      <div className="dropdown">
        <label tabIndex={0} className="btn-ghost btn lg:hidden">
          <BsList className="text-2xl" />
        </label>

        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
        >
          <MenuList />
        </ul>
      </div>

      <Link to="/">
        <img
          className="mx-auto h-10 md:h-16"
          src={logo}
          alt="Car doctor logo"
        />
        <h1 className="text-center text-base font-bold md:text-xl">PUTUL</h1>
      </Link>
    </>
  );
};

export default NavSiteBrandAndHiddenMenu;
