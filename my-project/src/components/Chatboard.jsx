// Chatboard.jsx

import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001'); // Assuming your server is running on http://localhost:3001

const Chatboard = ({ username }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Listen for incoming messages from the server
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up the socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      // Emit a 'message' event to the server
      socket.emit('message', { username, text: newMessage });

      // Clear the input field
      setNewMessage('');
    }
  };

  return (
    <div>
      <h2>Chatboard</h2>
      <div style={{ border: '1px solid #ccc', padding: '10px', maxHeight: '300px', overflowY: 'auto' }}>
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.username}:</strong> {message.text}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatboard;
