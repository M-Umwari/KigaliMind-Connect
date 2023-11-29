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
      <section className='flex flex-col gap-4 my-10 px-24'>
        <h2 >Topics</h2>
        <p>Check in with your selves through this topics, learn more abouth them and identify the one that you are facing and get help from your peers and our support team.</p>
        
        <section className='grid grid-cols-3 gap-5 text-red-950 font-bold text-lg'>
          <Link to="/topics/depression" className="bg-[url('src/assets/Images/Anxiety.svg')] bg-auto bg-no-repeat h-32 w-full text-center py-14 rounded-lg" >Depression</Link>
          <Link to="/topics/anxiety" className="bg-[url('src/assets/Images/Anxiety.svg')] bg-auto bg-no-repeat h-32 w-full text-center py-14 rounded-lg" >Anxiety</Link>
          <Link to="/topics/loneliness" className="bg-[url('src/assets/Images/loneliness.svg')] bg-auto bg-no-repeat h-32 w-full text-center py-14 rounded-lg" >Loneliness</Link>
          <Link to="/topics/adhd" className="bg-[url('src/assets/Images/Anxiety.svg')] bg-auto bg-no-repeat h-32 w-full text-center py-14 rounded-lg" >ADHD</Link>
          <Link to="/topics/stress" className="bg-[url('src/assets/Images/Anxiety.svg')] bg-auto bg-no-repeat h-32 w-full text-center py-14 rounded-lg" >Stress</Link>
          <Link to="/topics/eating-disorders" className="bg-[url('src/assets/Images/Anxiety.svg')] bg-auto bg-no-repeat h-32 w-full text-center py-14 rounded-lg" >Eating Disorders</Link>
        </section>
      </section>
      <footer className="flex  items-center gap-20 justify-center bg-blue-950 text-blue-300 fixed bottom-0 h-10 w-full">
        <p>RWANDA MIND CONNECT  </p>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/"><img src="https://img.icons8.com/fluent/48/000000/facebook-new.png" alt="facebook"/></a>
          <a href="https://www.instagram.com/"><img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="instagram"/></a>
          <a href="https://twitter.com/"><img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="twitter"/></a>
        </div>
        
        </footer>
    </div>
  );
};

export default Topics;
