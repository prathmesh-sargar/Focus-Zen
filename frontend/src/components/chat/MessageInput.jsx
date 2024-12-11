// MessageInput.js
import React, { useState } from 'react';

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <div className="flex items-center p-4 bg-muted border-t border-muted">
      <input
        type="text"
        className="flex-1 p-3 rounded-lg bg-background text-secondary placeholder-secondary focus:outline-none w-[10px]"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={handleSend}
        className=" px-4 py-2 bg-primary text-white rounded-lg hover:bg-purple-700 transition duration-200"
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
