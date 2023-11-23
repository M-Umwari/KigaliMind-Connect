// Topics.jsx

import { NavLink, Link } from 'react-router-dom';

const Topics = () => {
  return (
    <div>
      <header className="bg-blue-950 text-blue-300 flex items-center  justify-between max-w-7xl mx-auto px-20 h-16">
        {/* Logo */}
        <h1 className="font-bold text-xl underline transition-all ease-in-out hover:text-blue-500">RWANDAMIND CONNECT</h1>
        <div className=" flex gap-4 items-center">
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
        </div>
      </header>
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
