import { Link } from "react-router-dom";
import Button from "./Button";
import Section from "./Section";
import { ReactTyped } from "react-typed";
import { useState } from "react";

const Collaboration = () => {

  const data = [
    {
      title: 'FocusZen',
      data: ' We believe in empowering learners and creators alike. Our mission is to provide the resources, community, and motivation you need to take your skills to the next level.     ___________________________  Imagine a platform designed to guide you on your journey to excellence, where every course, mentor, and community is here to support your growth. Welcome to FocusZen!  ________________________________',
    },
    {
      title: 'Feature',
      data: 'Personalized Learning Paths: Start at your level and build towards your goals with curated learning paths that match your pace and ambition. ____________________________  Community-Driven Success: Connect, collaborate, and celebrate achievements with a supportive community that shares your drive and determination.  ____________________________    Track Your Progress: Set your goals and monitor your achievements as you go from one milestone to the next – because every step counts!',
    },
  ]
  const [tab, setTab] = useState(data[0].title)

  const filterdata = data.filter((e) => e.title === tab)
  const active = filterdata[0].title

  return (
    
    <Section crosses>
      <div className="container lg:flex items-center justify-between py-12 px-6 bg-black rounded-lg shadow-lg text-white">
        <div className="lg:max-w-[25rem]">
          <h2 className="text-4xl font-bold mb-4 md:mb-8 leading-tight">
          Where Ambition Meets Opportunity – FocusZen Elevates You!
          </h2>
 
        
          <p className="text-lg mt-2 mb-6">
          <ReactTyped
                className="text-white "
                strings={["Search and view only the videos and blogs you need. Stay focused and avoid overwhelming recommendations."]}
                typeSpeed={70}
                backSpeed={50}
                loop={true}
              />
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg"><Link to="/upskill" >Blogs Search Community </Link></Button>
        </div>

        <div className="lg:flex lg:items-center lg:justify-end lg:max-w-[50%] mt-10 lg:mt-0 ">
        

          <div className=" w-72 flex flex-col rounded-xl glass  min-h-72 mt-3 mr-[50px] ">
          <div>
            <img
              src="https://media4.giphy.com/media/1gbqIc1fK8QgR3bHL7/giphy.gif?cid=790b7611a2f696d51a46ce892e420e77735707466a4abd3b&rid=giphy.gif&ct=g"
              alt="test"
              width="300"
              height="300"
              className="rounded-t-xl w-full"
            />
          </div>
          <div className="flex flex-col py-3 px-3 pb-7 -mt-4 bg-black rounded-b-xl ">
            <div className="flex justify-between">
              <h1 className="font-RubikBold "> Need productivity tips or college life advice? Our AI-powered chatbot is available 24/7 to guide you.</h1>
             
            </div>
            <div className="flex  justify-between font-mono">
             
            </div>
          </div>
        </div>



        <div className="h-[400px] bg-black max-w-xs mx-2 sm:w-[20rem] rounded-xl mt-1">

      <div className="px-10 flex justify-between">
        {data.map((n, index) => {
          return (
            <button
              onClick={() => setTab(n.title)}
              className={`${
                active === n.title
                  ? 'text-blue-400 border-b-blue-400 border-b-2 transition-all  duration-200 ease-in-out font-bold text-xl'
                  : ''
              } w-[110px] py-2 `}
              key={index}
            >
              {n.title}
            </button>
          )
        })}
      </div>

      <div className="pt-4 px-4">
        {filterdata.map((n, index) => {
          return <div key={index}>{n.data}</div>
        })}
      </div>
    </div>
        </div>
        
      </div>
    </Section>
  );
};

export default Collaboration;
