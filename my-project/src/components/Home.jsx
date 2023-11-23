// Home.jsx

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>
        {/* Logo */}
        <img src="/assets/Images/logo.png" alt="RwandaMind Connect Logo" />
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
        Maintaining good mental health is paramount for navigating the complexities of daily life. 
        It serves as the cornerstone for our overall well-being, influencing how we think, feel, and act. 
        A robust mental health foundation enables us to cope with stress, build resilient relationships, and make sound decisions. It is the key to unlocking our full potential, fostering creativity, and enhancing our ability to handle challenges effectively. In a world that constantly demands our attention and resilience, prioritizing mental health is not just a luxury but a necessity. By nurturing our mental well-being, we empower ourselves to lead fulfilling lives, achieve success, and contribute positively to the world around us.

        Embracing the journey towards prioritizing mental well-being is a courageous and commendable step.
        To all those who are taking this proactive approach to care for their mental health, I extend my heartfelt appreciation. 
        It is a journey that requires strength and self-awareness, and by acknowledging the importance of mental well-being, you are demonstrating resilience and self-love. Remember, you are not alone on this path. We, as a community, are excited and committed to supporting you every step of the way. 
        Whether it's through sharing resources, providing a listening ear, or fostering an environment of understanding, we look forward to being a part of your mental health journey. Your well-being matters, and your commitment to it is truly inspiring.
        </p>
      </div>
    </div>
  );
};

export default Home;
