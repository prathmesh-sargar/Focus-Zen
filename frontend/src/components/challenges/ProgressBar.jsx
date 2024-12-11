import React from "react";

const ProgressBar = ({ completed, total }) => {
  const progress = (completed / total) * 100;

  return (
    <div className="w-full max-w-3xl bg-gray-700 rounded-full overflow-hidden my-6">
      <div
        className="bg-purple-500 h-4 rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
