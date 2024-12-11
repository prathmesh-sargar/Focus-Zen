import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { setcategory } from './store/storeSlices';

const NavbarYT = () => {
  const [input, setinput] = useState("");
  const dispatch = useDispatch();

  const searchbtn = () => {
    dispatch(setcategory(input));
    setinput("");
  };

  return (
    <div>
      <div className="navbar text-black flex justify-between">
        <div className="flex-1"></div>
        <div className="flex">
          <div className="flex md:mr-[400px] text-black">
            {/* Updated input field for better responsiveness */}
            <input
              value={input}
              onChange={(e) => setinput(e.target.value)}
              type="text"
              placeholder="Search"
              className="outline-none px-4 py-2 rounded-lg border w-full md:w-auto bg-slate-100 text-black"
            />
            <div className="bg-purple-600 duration-300 ml-1 px-2 rounded-lg cursor-pointer">
              <IoSearchSharp
                onClick={searchbtn}
                size={"28px"}
                className="items-center flex justify-center text-center mt-2 text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarYT;
