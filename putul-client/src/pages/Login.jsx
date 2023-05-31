import { useContext } from "react";
import { BsGoogle } from "react-icons/bs";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useDynamicTitle from "../utils/useDynamicTitle";

const Login = () => {
  useDynamicTitle("Putul - Login");

  const { setUser, auth, googleProvider, login, loginWithPassword } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLoginWithPassword = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(email, password);

    loginWithPassword(auth, email, password)
      .then((userInfo) => {
        setUser(userInfo.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogin = () => {
    login(auth, googleProvider)
      .then((userInfo) => {
        setUser(userInfo.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="mx-auto my-10 max-w-sm space-y-3 text-center">
      <form onSubmit={handleLoginWithPassword}>
        <div className="card w-full max-w-sm bg-base-100 shadow-2xl">
          <div className="card-body">
            <div>
              <h1 className="text-2xl font-bold">Login With</h1>
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
              <label className="label">
                <a href="#" className="link-hover label-text-alt link">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn-primary btn" type="submit">
                Login
              </button>
            </div>

            <div className="text-center">
              <p>
                Do not have an account?{" "}
                <Link to="/signup" className="link-primary link">
                  Create an account
                </Link>
              </p>
            </div>

            <div className="divider">OR</div>

            <div>
              <button
                className="btn-outline btn-wide btn gap-2"
                onClick={handleLogin}
              >
                <BsGoogle />
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
