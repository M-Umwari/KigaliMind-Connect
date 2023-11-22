// Topics.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Topics = () => {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to="/topics/depression">Depression</Link>
        </li>
        <li>
          <Link to="/topics/anxiety">Anxiety</Link>
        </li>
        <li>
          <Link to="/topics/loneliness">Loneliness</Link>
        </li>
        <li>
          <Link to="/topics/adhd">ADHD</Link>
        </li>
        <li>
          <Link to="/topics/stress">Stress</Link>
        </li>
        <li>
          <Link to="/topics/eating-disorders">Eating Disorders</Link>
        </li>
      </ul>
    </div>
  );
};

export default Topics;
