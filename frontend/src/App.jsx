import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Front from "./components/Front";
// import Improve from "./components/Improve";
// import Header from "./components/Header";

import Front from "./components/Front";
import Upskill from "./components/Upskill";
import Login from "./components/Auth/Login";
import Singup from "./components/Auth/Signup";
import Improve from "./components/Improve";
import CommunityChat from "./components/chat/ChatCommunity";
import HomepageYT from "./components/YTclone/HomepageYT";
import Watch from './components/YTclone/Watch'
import Profile from "./components/profile/Profile";
import ChallengePage from "./components/challenges/ChallengePage";
import CoursesList from "./components/challenges/CoursesList";

const App = () => {
  return (
    <>
      <Router>
      <Routes>
      <Route path="/" element={<Front/>} />
      <Route path="/improve" element={<Improve/>} />
      <Route path="/upskill" element={<Upskill/>} />
      {/* <Route path="/ytsearch" element={<YTSearch/>} /> */}
      <Route path="/ytsearch" element={<HomepageYT/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup"  element={<Singup/>}/>
      <Route path="/community" element={<CommunityChat/>} />   
      <Route path="/watch" element={<Watch/>} />   
      <Route path="/profile" element={<Profile/>} />    
      <Route path="/challenge" element={<CoursesList/>} />   
      {/* Challenge Page for Specific Course */}
      <Route path="/course/:language" element={<ChallengePage />} />
      <Route path="*" element={<div className="text-white">Page not found!</div>} />

      </Routes>
    </Router>

    </>
  );
};

export default App;
