import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";

const NavProfileMenu = () => {
  const { user, setUser, auth, logout } = useContext(AuthContext);
  const [userImage, setUserImage] = useState(null);
  const navigate = useNavigate();

  const imageUrl = user.photoURL;

  useEffect(() => {
    const img = new Image();

    img.onload = function () {
      setUserImage(
        <img src={imageUrl} alt={`Profile Picture of ${user.displayName}`} />
      );
    };

    img.onerror = function () {
      setUserImage(<BsPersonCircle className="text-[60px] text-gray-600" />);
    };

    img.src = imageUrl;

    // console.log("Profile picture set.");
  }, [imageUrl, user.displayName]);

  const handleLogout = () => {
    logout(auth)
      .then(() => {
        console.log("Logout Successful!");
        setUser(null);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div
        className="dropdown-end dropdown tooltip tooltip-bottom tooltip-primary"
        data-tip={user.displayName}
      >
        <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
          <div className="w-10 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
            <div className="flex h-full items-center justify-center">
              {userImage}
            </div>
          </div>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
        >
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavProfileMenu;
