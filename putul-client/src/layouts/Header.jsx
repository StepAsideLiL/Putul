import { Link } from "react-router-dom";
import NavMenu from "../components/NavMenu";
import NavSiteBrandAndHiddenMenu from "../components/NavSiteBrandAndHiddenMenu";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import NavProfileMenu from "../components/NavProfileMenu";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar mb-8 mt-3 bg-base-100 px-0">
      {/* NavBar Column 1 Start */}
      <div className="navbar-start">
        <NavSiteBrandAndHiddenMenu />
      </div>
      {/* NavBar Column 1 End */}

      {/* NavBar Column 2 Start */}
      <div className="navbar-center hidden lg:flex">
        <NavMenu />
      </div>
      {/* NavBar Column 2 End */}

      {/* NavBar Column 3 Start */}
      <div className="navbar-end space-x-2">
        {user ? (
          <NavProfileMenu />
        ) : (
          <Link className="btn" to="/login">
            Login
          </Link>
        )}
      </div>
      {/* NavBar Column 3 End */}
    </div>
  );
};

export default Header;
