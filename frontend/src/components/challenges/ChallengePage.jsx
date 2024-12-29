import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import VideoSection from "./VideoSection";
import ModulesSection from "./ModulesSection";
import Navbar from "../Navbar";
import coursesData from "./data/coursesData.js"; // Import course data

const ChallengePage = () => {
  const { language } = useParams(); // Get language from URL
  const course = coursesData[language]; // Fetch course-specific data
  const totalQuestions = course.questions.length;

  const [completedQuestions, setCompletedQuestions] = useState(0);

  const handleProgressUpdate = (completed) => {
    setCompletedQuestions(completed);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-6">
        <div className="flex flex-col md:flex-row w-full gap-4 mt-[80px]">
          <div className="w-full md:w-[50%] md:fixed left-0 p-4 h-full overflow-y-auto">
            <div className="mb-6">
              <ProgressBar completed={completedQuestions} total={totalQuestions} />
            </div>
            <div className="mb-6 md:mb-0">
              <VideoSection videoUrl={course.videoUrl} courseName={course.courseName}  />
            </div>
          </div>
          <div className="w-full md:w-[47%] md:ml-[50%] p-4">
            <ModulesSection
              questions={course.questions}
              onProgressUpdate={handleProgressUpdate}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChallengePage;
