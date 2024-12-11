import React from 'react';
import Navbar from '../Navbar';
import VideoContainer from './VideoContainer';
import ButtonList from './ButtonList';
import NavbarYT from './NavbarYT';

const HomepageYT = () => {
  return (
    <>
      <Navbar />
      {/* Navbar for Search */}
      <div className="mt-[80px] mr-[57px] px-4 md:mt-[100px] ">
        <NavbarYT />
      </div>

      {/* Button List */}
      <div className="scroll hidden md:block">
        <ButtonList />
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row mt-4">
        {/* Video Section */}
        <div className="w-full p-4">
          <VideoContainer />
        </div>
      </div>
    </>
  );
};

export default HomepageYT;
