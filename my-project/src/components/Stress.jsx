import {Link} from 'react-router-dom';
import { auth } from '../services/authentication';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Stress() {
 const navigate = useNavigate()
  return (
    <div>
      
      <header className="bg-blue-950 text-blue-300 px-20 h-1/4 ">
        {/* Logo */}
        <div className=" rounded-full my-3 ">         
             <img src='src/assets/Images/logo.png' className=" h-60 rounded-full" />
        </div>
      </header>
      <h2 className='text-black font-semibold'>What is stress?</h2>
      <p>Stress is our body’s response to pressure. Many different situations or life events can cause stress. It is often triggered when we experience something new or unexpected that threatens our sense of self or when we feel we have little control over a situation.</p>
      <p className='text-blue-400'>Click on this picture to learn more about stress</p>
      <a href="https://my.clevelandclinic.org/health/articles/11874-stress"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMhXqFUPb1loy7PVBI7I03gHRqHIqPgtz0mw&usqp=CAU" alt ="About stress"/> </a>
      <br/>
      <Link to="/chatboard" className="bg-blue-950 w-52 text-center text-white hover:bg-blue-300 hover:font-bold hover:text-blue-950 rounded-md px-6 py-3">Connect with your peers</Link><br/>
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
