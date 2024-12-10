import Lottie from "lottie-react";
import registerLottie from "../assets/lottie/register.json"
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const Register = () => {
    const { handleRegister, manageProfile } = useContext( AuthContext)
    const handleRegisterSubmit = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        // console.log({name, photo, email, password});
        handleRegister( email, password )
        .then((res) =>{
            manageProfile( name, photo )
                .then(() =>{
                    setUser({...res.user, displayName: name, photoURL : photo})
                // navigate("/")
            })
            // toast.success("Successfully register")
        })
        .catch(() =>{
            // toast.error("User already exist")
        })
    }
  return (
    <div className="hero bg-base-200 py-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie className="max-w-2xl" animationData={registerLottie} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          <form onSubmit={handleRegisterSubmit} className="card-body">
            <h1 className="text-center text-2xl font-bold">Register now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
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
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
