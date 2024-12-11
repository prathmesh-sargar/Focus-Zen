// App.js
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import ChatFeed from './ChatFeed';
import MessageInput from './MessageInput';
import Navbar from '../Navbar';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CommunityChat() {
  const [activeGroup, setActiveGroup] = useState('Web Development');
  const [messages, setMessages] = useState([]);

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



  const handleSend = (text) => {
    setMessages([...messages, { text, isUser: true }]);
  };

  return (
    <>
    <Navbar/>
    <div className='mt-2' ></div>
    <div className="flex h-screen bg-background text-secondary mt-2">
      <Sidebar setActiveGroup={setActiveGroup} />
      <div className="flex flex-col flex-1">
        <ChatFeed messages={messages} />
        <MessageInput onSend={handleSend} />
      </div>
    </div>
    </>
  );
}

export default CommunityChat;
