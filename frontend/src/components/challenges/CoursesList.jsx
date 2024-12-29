// import { Link } from "react-router-dom";

// const CoursesList = () => {
//   return (
//     <div className="p-6 text-center space-y-4">
//       <Link to="/course/Java" className="text-purple-500 font-bold">Java</Link>
//       <Link to="/course/JavaScript" className="text-purple-500 font-bold">JavaScript</Link>
//       <Link to="/course/ReactJS" className="text-purple-500 font-bold">ReactJS</Link>
//       <Link to="/course/CPlusPlus" className="text-purple-500 font-bold">C++</Link>
//     </div>
//   );
// };

// export default CoursesList;

import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const CoursesList = () => {
  const courses = [
    { id: "1", name: "JavaScript" },
    { id: "2", name: "ReactJS" },
    { id: "3", name: "CPP" },
    { id: "4", name: "Java" },
  ];

  return (
   <>
   <Navbar/>
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-6">
      <h1 className="text-3xl font-bold mb-8 text-purple-500">Available Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Link
            key={course.id}
            to={`/course/${course.name}`} // Navigate to specific course page
            className="p-6 bg-slate-800 rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            <h2 className="text-xl font-semibold">{course.name}</h2>
          </Link>
        ))}
      </div>
    </div>
   </>
  );
};

export default CoursesList;
