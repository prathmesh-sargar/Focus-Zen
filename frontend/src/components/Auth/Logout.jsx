import React from "react";
import { useDispatch } from "react-redux";
import { clearUsername } from "../YTclone/store/storeSlices";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearUsername()); // Clears Redux and localStorage
    swal({
      title: "Logged Out",
      icon: "info",
      buttons: false,
      timer: 2000,
    });
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="py-2 px-4 font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition"
    >
      Logout
    </button>
  );
};

export default Logout;
