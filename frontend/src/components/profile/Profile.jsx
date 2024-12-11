import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Logout from "../Auth/Logout";
import { useSelector, useDispatch } from "react-redux";
import { setUsername } from "../YTclone/store/storeSlices"; // Adjust path based on your file structure
import Piechart from "./Piechart";
import Linechart from "./Linechart";

const Profile = () => {
  const dispatch = useDispatch();

  // Fetch the username from Redux state
  const username = useSelector((state) => state.app.username || "Guest");

  // Ensure the username is synced with localStorage on component mount
  useEffect(() => {
    if (!username || username === "Guest") {
      const storedUsername = localStorage.getItem("username");
      if (storedUsername) {
        dispatch(setUsername(storedUsername));
      }
    }
  }, [dispatch, username]);

  return (
    <>
      <Navbar />
      <div className="mt-[100px] text-center text-white">
        <h1 className="text-3xl font-bold">Profile Page</h1>
        <p className="text-lg mt-4">
          Welcome, <span className="text-purple-500 font-semibold">{username}</span>
        </p>
        <br />
        <Piechart/>
        <br /><br /><br />
        <Linechart/>
        <Logout />
      </div>
    </>
  );
};

export default Profile;
