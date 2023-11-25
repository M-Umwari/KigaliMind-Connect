// Topics.jsx

import { NavLink, Link } from 'react-router-dom';

const Topics = () => {
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
      <h2>Topics</h2>
      <section className='grid grid-cols-3 gap-5 '>
        <Link to="/topics/depression" className="bg-red-800 h-32 w-full text-center py-14 rounded-lg" >Depression</Link>
        <Link to="/topics/anxiety" className="bg-red-800 h-32 w-full text-center py-14 rounded-lg" >Anxiety</Link>
        <Link to="/topics/loneliness" className="bg-red-800 h-32 w-full text-center py-14 rounded-lg" >Loneliness</Link>
        <Link to="/topics/adhd" className="bg-red-800 h-32 w-full text-center py-14 rounded-lg" >ADHD</Link>
        <Link to="/topics/stress" className="bg-red-800 h-32 w-full text-center py-14 rounded-lg" >Stress</Link>
        <Link to="/topics/eating-disorder" className="bg-red-800 h-32 w-full text-center py-14 rounded-lg" >Eating Disorders</Link>
      </section>
    </div>
  );
};

export default Topics;
