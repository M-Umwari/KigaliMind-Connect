// Home.jsx

import { NavLink } from 'react-router-dom';
import { auth } from '../services/authentication';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <header className="bg-blue-950 text-blue-300 px-20 h-1/4 ">
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

      <section className="max-w-7l mx-auto  mt-8">
        <div className="text-l text-blue-950 font-normal gap-30 ">
          <h2>Welcome to RwandaMind Connect, We're here for you!!</h2>
          <p>We are a transofrmative platform dedicated to enhance mental-well being in Rwanda. Connect with others facing similar challenges, share your personal journey, and find support in a compassionate community. Your stories matter, and together, we build a network of understanding and empowerment. Join us in shaping a positive future for mental health.Click on this picture to learn more about mental health</p>

        </div>
        
          <a href='https://www.healthyplace.com/other-info/mental-health-newsletter/connecting-with-others-friendship-enhance-mental-health#connecting'>< img className='object-none place-self-center pw-42 h-42' src="https://www.healthyplace.com/sites/default/files/images/stories/other-info/newsletter/connecting-others-mental-health-healthyplace.jpg" alt="connecting with others" /></a>
          

        
        <div className=" mt-6 flex flex-col gap-4">
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
      </section>
    </>
  );
};

export default Home;
