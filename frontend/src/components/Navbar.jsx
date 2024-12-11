

import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const username = useSelector((state) => state.app.username); // Access username from Redux

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-gray-950 text-white">
      <div className="flex justify-between items-center h-16">
        {/* Logo Section */}
        <div className="flex space-x-2">
          {/* <img src="" className="h-12 w-12 rounded-full" alt="Logo" /> */}
          <h1 className="font-semibold text-xl cursor-pointer">
            <Link to="/">
              Focus<span className="text-2xl text-purple-500 font-bold">Zen</span>
            </Link>
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-row space-x-[50px]">
          <span className="hover:text-purple-500 transition duration-300">
            <Link to="/">Home</Link>
          </span>
          <span className="hover:text-purple-500 transition duration-300">
            <Link to="/ytsearch">Search Engine</Link>
          </span>
          <span className="hover:text-purple-500 transition duration-300">
            <Link to="/improve">Improve</Link>
          </span>
          <span className="hover:text-purple-500 transition duration-300">
            <Link to="/upskill">Resources</Link>
          </span>
          <span className="hover:text-purple-500 transition duration-300">
            <Link to="/community">Community</Link>
          </span>
          <span className="hover:text-purple-500 transition duration-300">
            <Link to={username ? "/profile" : "/login"}>
              {username ? "Profile" : "Login"}
            </Link>
          </span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
             <IoCloseSharp  className="text-2xl" /> // Close Icon
            ) : (
                <AiOutlineMenu  className="text-2xl" />    // 
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 bg-gray-900 p-4 rounded-lg">
          <Link
            to="/"
            onClick={toggleMenu}
            className="hover:text-purple-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/ytsearch"
            onClick={toggleMenu}
            className="hover:text-purple-500 transition duration-300"
          >
            Search Engine
          </Link>
          <Link
            to="/improve"
            onClick={toggleMenu}
            className="hover:text-purple-500 transition duration-300"
          >
            Improve
          </Link>
          <Link
            to="/upskill"
            onClick={toggleMenu}
            className="hover:text-purple-500 transition duration-300"
          >
            Resources
          </Link>
          <Link
            to="/community"
            onClick={toggleMenu}
            className="hover:text-purple-500 transition duration-300"
          >
            Community
          </Link>
          <Link
            to={username ? "/profile" : "/login"}
            onClick={toggleMenu}
            className="hover:text-purple-500 transition duration-300"
          >
            {username ? "Profile" : "Login"}
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
