import Lottie from "lottie-react";
import loginLottie from "../assets/lottie/login.json"
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
    const { handleSignIn } = useContext( AuthContext)
    const location = useLocation()
    // console.log(location.state);
    const navigate = useNavigate()
    const handleSignInSubmit = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        // console.log({name, photo, email, password});
        handleSignIn( email, password )
        .then((res) =>{
            // toast.success("Successfully register")
            navigate( location?.state ? location.state : "/")
        })
        .catch(() =>{
            // toast.error("User already exist")
        })
    }
  return (
    <div className="hero bg-base-200 py-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie className="max-w-2xl" animationData={loginLottie} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          <form onSubmit={handleSignInSubmit} className="card-body">
            <h1 className="text-center text-2xl font-bold">SignIn now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">SignIn</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
