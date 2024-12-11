// ChatFeed.js
import React from 'react';

const ChatFeed = ({ messages }) => {
  return (
    <>
      <div className="bg-black flex-1 p-6 overflow-y-auto text-secondary">
        {/* <div className='mt-[120px]' >
        _____________☜(⌒▽⌒)☞_________
        </div> */}
        {messages.length === 0 ? ( // Check if there are no messages
          <div className="text-center text-white font-bold text-3xl flex items-center justify-center h-screen">
           <div className='text-center text-2xl font-bold' > This section is under development.</div>
          </div>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`bg-purple-400 mb-4 p-3 rounded-lg max-w-xs ${
                msg.isUser
                  ? 'ml-auto bg-primary text-black text-right'
                  : 'bg-muted text-secondary'
              }`}
            >
              <p>{msg.text}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ChatFeed;
