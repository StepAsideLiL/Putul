import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import useDynamicTitle from "../utils/useDynamicTitle";

const UserProfile = () => {
  const { user, setUser, auth, logout } = useContext(AuthContext);
  const { displayName, email } = user;
  const navigate = useNavigate();

  useDynamicTitle(`Putul - ${displayName}`);

  const handleLogout = () => {
    logout(auth)
      .then(() => {
        setUser(null);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="my-10 space-y-5">
      <h1 className="text-3xl">
        <span className="font-bold">{displayName.split(" ")[0]}</span>&apos;s
        Profile
      </h1>

      <p>
        Email: <span className="font-bold">{email}</span>
      </p>

      <button className="btn-outline btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
