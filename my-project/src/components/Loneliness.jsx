import {Link} from 'react-router-dom';
import { auth } from '../services/authentication';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
export default function Loneliness() {
  const navigate = useNavigate()
  return (
    <div>
      <header className="bg-blue-950 text-blue-300 px-20 h-1/4 ">
        {/* Logo */}
        <div className=" rounded-full my-3 ">         
             <img src='src/assets/Images/logo.png' className=" h-60 rounded-full" />
        </div>
      </header>
      <h2 className='texT-black font-semibold'>What is Loneliness?</h2>
      <p>One thing I've learned is the difference between feeling alone and feeling lonely - and how you can feel lonely in a crowd full of people, but quite peaceful and content when alone.</p>
      <p className='text-blue-400'>Click on this picture to learn more about Loneliness</p>
      
      <a href="https://www.mind.org.uk/information-support/tips-for-everyday-living/loneliness/about-loneliness/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH9KBOG8P4BAwpv4nIS2ggXNhncWwZ6nElow&usqp=CAU"alt="Loneliness"/></a>
      <br/>
      <Link to="/chatboard" className="bg-blue-950 w-52 text-center text-white hover:bg-blue-300 hover:font-bold hover:text-blue-950 rounded-md px-6 py-3">Connect with your peers</Link>
      <br/>
      <br/>
      <Link to="/support" className="bg-blue-950 w-52 text-center text-white hover:font-bold hover:bg-blue-300 hover:text-blue-950 rounded-md px-6 py-3">Get help from our support team</Link>
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
  )
}
