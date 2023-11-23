// Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>
        {/* Logo */}
        <img src="/path/to/your/logo.png" alt="RwandaMind Connect Logo" />
      </div>

      <div>
        {/* Welcome text */}
        <h1>Welcome to RwandaMind Connect</h1>
        <p>We are here for you.</p>
      </div>

      <div>
        {/* Navigation Links */}
        <nav>
          <ul>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        {/* Information about Mental Health */}
        <h2>Mental Health: The Key to a Proper Life, Success, and Peace</h2>
        <p>
          Your mental well-being is crucial for a successful and peaceful life. RwandaMind Connect is here to provide
          support and resources to help you on your mental health journey.
        </p>
      </div>
    </div>
  );
};

export default Home;
