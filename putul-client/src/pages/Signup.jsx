import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import useDynamicTitle from "../utils/useDynamicTitle";

const Signup = () => {
  useDynamicTitle("Putul - Create an account");

  const { auth, createUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const photoURL = event.target.photoURL.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(name, email, password);

    createUser(auth, email, password)
      .then((userInfo) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            console.log("Name set!");
            logout(auth);
            navigate("/login");
          })
          .catch((error) => {
            console.error(error);
          });
        console.log(userInfo.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="my-10">
      <form onSubmit={handleSignup} className="mx-auto max-w-sm">
        <div className="card w-full max-w-sm bg-base-100 shadow-2xl">
          <div className="card-body">
            <div>
              <h1 className="text-center text-2xl font-bold">
                Create an Account
              </h1>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input-bordered input"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                name="photoURL"
                placeholder="Photo URL"
                className="input-bordered input"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input-bordered input"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input-bordered input"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn-primary btn" type="submit">
                Signup
              </button>
            </div>

            <div className="text-center">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="link-primary link">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
