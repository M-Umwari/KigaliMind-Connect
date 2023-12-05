// Chatboard.jsx

import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { auth } from '../services/authentication';
import { signOut } from 'firebase/auth';
import { useNavigate,NavLink
 } from 'react-router-dom';

const socket = io('http://localhost:3001'); 

const Chatboard = () => {
  <header className="bg-blue-950 text-blue-300 px-20 h-1/4 ">
        {/* Logo */}
        <div className=" rounded-full my-3 ">         
             <img src='src/assets/Images/logo.png' className=" h-60 rounded-full" />
        </div>
  </header>
  const navigate = useNavigate()
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
      // socket.emit('message', { username, text: newMessage });

      // Clear the input field
      setNewMessage('');
    }
  };

  return (
    <div>
      <header className="bg-blue-950 text-blue-300 px-20 h-1/4">
        {/* Logo */}
        <div className="max-w-7xl mx-auto flex items-center h-full justify-between ">
          <div className=" rounded-full my-3 ">
            <img src='src/assets/Images/logo.png' className=" h-60 rounded-full" />
          </div>
          <div className=" flex gap-4 items-center md:text-2xl">
            {/* Navigation Links */}
            <NavLink to="/topics" className={({ isActive }) =>
              isActive
                ? "flex h-10 items-center gap-1 px-4 underline"
                : "flex h-10 items-center gap-1.5 px-4 "}>Topics</NavLink>
            <NavLink to="/resources" className={({ isActive }) =>
              isActive
                ? "flex h-10 items-center gap-1 px-4 d underline"
                : "flex h-10 items-center gap-1.5 px-4 "}>Resources</NavLink>
            <NavLink to="/support" className={({ isActive }) =>
              isActive
                ? "flex h-10 items-center gap-1 px-4  underline"
                : "flex h-10 items-center gap-1.5 px-4 "}>Support</NavLink>
            <NavLink to="/chatboard" className={({ isActive }) =>
              isActive
                ? "flex h-10 items-center gap-1 px-4  underline"
                : "flex h-10 items-center gap-1.5 px-4 "}>Chatboard</NavLink>
          </div>
        </div>
      </header>
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
      <footer className="flex  items-center gap-20 justify-center bg-blue-950 text-blue-300 fixed bottom-0 h-10 w-full">
        <p>RWANDA MIND CONNECT</p>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/"><img src="https://img.icons8.com/fluent/48/000000/facebook-new.png" alt="facebook"/></a>
          <a href="https://www.instagram.com/"><img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="instagram"/></a>
          <a href="https://twitter.com/"><img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="twitter"/></a>
        </div>
        <button onClick={()=> {
          signOut(auth)
          .then(() => {
            navigate('/')
          })
        }
        }>
          Log out
        </button>
        </footer>
    </div>
  );
};

export default Chatboard;
