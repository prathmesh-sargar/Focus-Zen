import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import VideoSection from "./VideoSection";
import ModulesSection from "./ModulesSection";
import Navbar from "../Navbar";

const ChallengePage = () => {
  const totalQuestions = 3; // Total static questions for progress calculation
  const [completedQuestions, setCompletedQuestions] = useState(0);

  // Handler to update progress
  const handleProgressUpdate = (completed) => {
    setCompletedQuestions(completed);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-6">
        {/* Mobile-first Layout */}
        <div className="flex flex-col md:flex-row w-full gap-4 mt-[100px]">
          {/* Left Section: Progress Bar and Video Section */}
          <div className="w-full md:w-[50%] md:fixed left-0 p-4 h-full overflow-y-auto">
            {/* Progress Bar */}
            <div className="mb-6">
              <ProgressBar completed={completedQuestions} total={totalQuestions} />
            </div>

            {/* Video Section */}
            <div className="mb-6 md:mb-0">
              <VideoSection videoUrl="https://www.youtube.com/embed/2eebptXfEvw" />
            </div>
          </div>

          {/* Right Section: Modules */}
          <div className="w-full md:w-[47%] md:ml-[50%] p-4">
            <ModulesSection onProgressUpdate={handleProgressUpdate} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChallengePage;
