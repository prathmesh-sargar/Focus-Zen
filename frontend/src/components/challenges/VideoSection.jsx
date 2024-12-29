import React from "react";

const VideoSection = ({ videoUrl, courseName }) => {
  return (
  <>
    <div className="w-full max-w-3xl mb-6">
    <iframe
  className="w-full h-64 md:h-96 rounded-lg shadow-lg"
  src={videoUrl}
  title="YouTube video"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
     
    </div>
    <h1 className="font-bold text-2xl p-2">{courseName}</h1>
  </>
  );
};

export default VideoSection;
