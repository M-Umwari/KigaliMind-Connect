// Home.jsx

import { NavLink } from 'react-router-dom';
import { auth } from '../services/authentication';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
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

      <section className="max-w-7xl mx-auto  mt-8">
        <div className="text-xl text-blue-900 font-semibold  ">
          <h1>Welcome to RwandaMind Connect</h1>

        </div>
        <div>
          <a href='https://www.healthyplace.com/other-info/mental-health-newsletter/connecting-with-others-friendship-enhance-mental-health#connecting'img src="https://www.healthyplace.com/sites/default/files/images/stories/other-info/newsletter/connecting-others-mental-health-healthyplace.jpg" alt="connecting with others" /></div>
        <p className='text-xl text-blue-900 font-semibold'>Caring for Your Mental Health</p>
          <p className= "tEXT-xl text-blue-900 font-semibold">OverView</p>
         <p>Mental health includes emotional, psychological, and social well-being. It affects how we think, feel, act, make choices, and relate to others. Mental health is more than the absence of a mental illness—it’s essential to your overall health and quality of life. Self-care can play a role in maintaining your mental health and help support your treatment and recovery if you have a mental illness.</p>
         <p className="text-xl text-blue-900 font-semibold">About Self-Care</p>
         
            <p>Self-care means taking the time to do things that help you live well and improve both your physical health and mental health. When it comes to your mental health, self-care can help you manage stress, lower your risk of illness, and increase your energy. Even small acts of self-care in your daily life can have a big impact.

                Here are some tips to help you get started with self-care:</p>
        <ul className='list-disc'> 
            <li>Get regular exercise. Just 30 minutes of walking every day can help boost your mood and improve your health. Small amounts of exercise add up, so don’t be discouraged if you can’t do 30 minutes at one time.</li>
            <li>Eat healthy, regular meals and stay hydrated. A balanced diet and plenty of water can improve your energy and focus throughout the day. Also, limit caffeinated beverages such as soft drinks or coffee.</li>
            <li>Make sleep a priority. Stick to a schedule, and make sure you’re getting enough sleep. Blue light from devices and screens can make it harder to fall asleep, so reduce blue light exposure from your phone or computer before bedtime.</li>
            <li>Try a relaxing activity. Explore relaxation or wellness programs or apps, which may incorporate meditation, muscle relaxation, or breathing exercises. Schedule regular times for these and other healthy activities you enjoy such as journaling.</li>
            <li>Set goals and priorities. Decide what must get done now and what can wait. Learn to say “no” to new tasks if you start to feel like you’re taking on too much. Try to be mindful of what you have accomplished at the end of the day, not what you have been unable to do.</li>
            <li>Practice gratitude. Remind yourself daily of things you are grateful for. Be specific. Write them down at night, or replay them in your mind.</li>
            <li>Focus on positivity. Identify and challenge your negative and unhelpful thoughts.</li>
            <li>Stay connected. Reach out to your friends or family members who can provide emotional support and practical help.</li>
            <li>Self-care looks different for everyone, and it is important to find what you need and enjoy. It may take trial and error to discover what works best for you. In addition, although self-care is not a cure for mental illnesses, understanding what causes or triggers your mild symptoms and what coping techniques work for you can help manage your mental health.</li>
        </ul>

        
        <div className=" mt-6 flex flex-col gap-4">
          {/* Information about Mental Health */}
          <h2 className='text-lg font-semibold '>Mental Health is the Key to a Proper Life, Success, and Peace</h2>
          <p>
            Maintaining good mental health is paramount for navigating the complexities of daily life.
            It serves as the cornerstone for our overall well-being, influencing how we think, feel, and act.
            A robust mental health foundation enables us to cope with stress, build resilient relationships, and make sound decisions. It is the key to unlocking our full potential, fostering creativity, and enhancing our ability to handle challenges effectively. In a world that constantly demands our attention and resilience, prioritizing mental health is not just a luxury but a necessity. By nurturing our mental well-being, we empower ourselves to lead fulfilling lives, achieve success, and contribute positively to the world around us.
          </p>
          <p>
            Embracing the journey towards prioritizing mental well-being is a courageous and commendable step.
            To all those who are taking this proactive approach to care for their mental health, I extend my heartfelt appreciation.
            It is a journey that requires strength and self-awareness, and by acknowledging the importance of mental well-being, you are demonstrating resilience and self-love. Remember, you are not alone on this path. We, as a community, are excited and committed to supporting you every step of the way.
            Whether it is through sharing resources, providing a listening ear, or fostering an environment of understanding, we look forward to being a part of your mental health journey. Your well-being matters, and your commitment to it is truly inspiring.
          </p>
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
