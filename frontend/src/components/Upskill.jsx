import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Upskill() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const username = useSelector((state) => state.app.username);
  const navigate = useNavigate();


  useEffect(() => {
    if (!username) {
      swal({
        title: "Login Required",
        text: "Please log in to access this page.",
        icon: "warning",
        button: "Go to Login",
      }).then(() => {
        navigate("/login");
      });
    }
  }, [username, navigate]); // Dependencies: username and navigate

  // Dummy blog data for each category
  const dummyBlogs = {
    "MERN": [
      { title: 'Getting Started with MERN Stack', snippet: 'Learn the basics of MERN Stack development...', url: 'https://dev.to/bhavik786/getting-started-with-mern-stack-a-step-by-step-guide-kcn' },
      { title: 'Advanced MERN Techniques', snippet: 'Take your MERN skills to the next level...', url: 'https://dev.to/sasvbahub/advanced-mern-stack-course-2od3' },
      { title: 'React Hooks Overview', snippet: 'Understand React hooks in depth...', url: 'https://dev.to/galabeketov/mastering-react-hooks-a-comprehensive-guide-for-frontend-developers-41c3' },
    ],
    "Web Development": [
      { title: 'Responsive Web Design Tips', snippet: 'Make your website look great on any device...', url: 'https://dev.to/estheridabor/tips-on-creating-a-responsive-design-13e1' },
      { title: 'Essential Tools for Web Developers', snippet: 'Discover the tools every web developer should know...', url: 'https://dev.to/qmoniqs/8-tools-every-web-developers-should-learn-in-2023-1l08' },
    ],
    "Python Full Stack": [
      { title: 'Building Full-Stack Apps with Django', snippet: 'Learn to build web applications with Python...', url: 'https://dev.to/philipokiokio/how-to-build-a-django-rest-framework-post-end-46cn' },
      { title: 'Flask for Beginners', snippet: 'Get started with Flask for Python web development...', url: 'https://dev.to/ketanip/flask-for-beginners-5h5j' },
    ],
    "College Startup Story": [
      { title: 'How We Built Our College Startup', snippet: 'Our journey from idea to execution...', url: 'https://dev.to/antoinette0x53/couch-cms-and-the-lazy-developer' },
      { title: 'Challenges of Running a College Startup', snippet: 'Discover the challenges and how we overcame them...', url: 'https://dev.to/josiahmann/how-i-went-from-9hr-to-selling-a-company-for-7-figures-part-1-3lh0' },
    ],
    "AR VR": [
      { title: 'Introduction to AR VR', snippet: 'Explore the basics of AR and VR...', url: 'https://dev.to/code_passion/introduction-to-virtual-and-augmented-reality-vrar-ab9' },
      { title: 'Building AR Apps', snippet: 'Learn how to build AR applications...', url: 'https://dev.to/forasoft/why-should-android-developers-start-building-ar-apps-before-2024-4ea4' },
    ],
  };

  // Filter blogs based on selected category and query
  const filteredBlogs = Object.entries(dummyBlogs)
    .filter(([category]) => !selectedCategory || category === selectedCategory)
    .flatMap(([, blogs]) =>
      blogs.filter(
        (blog) =>
          blog.title.toLowerCase().includes(query.toLowerCase()) ||
          blog.snippet.toLowerCase().includes(query.toLowerCase())
      )
    );

  const handleSearch = (e) => {
    e.preventDefault();
    // Since the search is handled by `filteredBlogs`, no additional code is needed here
  
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 mt-[100px] text-center">
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search for blogs or content..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="p-2 border rounded-md w-full max-w-md"
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-purple-500 text-white rounded-md"
            onClick={handleSearch}
          >
            Search
          </button>
        </form>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-md text-white ${
              !selectedCategory ? 'bg-purple-700' : 'bg-purple-500'
            }`}
          >
            All Categories
          </button>
          {Object.keys(dummyBlogs).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md text-white ${
                selectedCategory === category ? 'bg-purple-700' : 'bg-purple-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog List */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-700 bg-purple-100 rounded-lg">{blog.title}</h3>
                <p className="text-gray-700">{blog.snippet}</p>
                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 mt-2 block"
                >
                  Read More
                </a>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No blogs found. Try another search term or select a category.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Upskill;


