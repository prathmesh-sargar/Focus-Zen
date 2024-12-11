import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUsername } from "../YTclone/store/storeSlices";
import Navbar from "../Navbar";
import swal from "sweetalert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState(""); // Added username input
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUsername(username)); // Store username in Redux
      swal({
        title: "Successfully Logged In",
        icon: "success",
        buttons: false,
        timer: 3000,
      });
      navigate("/");
    } catch (err) {
      setError(err.message);
      swal({
        title: "Something went wrong",
        icon: "error",
        buttons: false,
        timer: 2000,
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-purple-500">Login</h2>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium">Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-1 text-gray-800 bg-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
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
              Login
            </button>
          </form>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <p className="text-center text-sm">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-purple-400 cursor-pointer hover:underline"
            >
              Signup
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
