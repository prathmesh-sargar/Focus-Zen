import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import swal from "sweetalert";


const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [username, setUserName] = useState(""); // Added username field
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // dispatch(setUsername(username)); // Store username in Redux
      swal({
        title: "Successfully Signed Up",
        icon: "success",
        buttons: false,
        timer: 3000,
      });
      navigate("/login");
    } catch (err) {
      setError(err.message);
      swal({
        title: "Something went wrong",
        icon: "error",
        buttons: false,
        timer: 1000,
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-purple-500">
            Create an Account
          </h2>
          <form className="space-y-4" onSubmit={handleSignup}>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-1 text-gray-800 bg-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-1 text-gray-800 bg-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition"
            >
              Signup
            </button>
          </form>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <p className="text-center text-sm">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-purple-400 cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
export default Signup;
