import {Link} from 'react-router-dom';
import { auth } from '../services/authentication';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
export default function EatingDisorder() {
  const navigate = useNavigate()
  return (
    <div>
      <header className="bg-blue-950 text-blue-300 px-20 h-1/4 ">
        <div className="max-w-7xl mx-auto flex items-center h-full justify-between ">
          <div className=" rounded-full my-3 ">
            <img src='./' className=" h-60 rounded-full" />
          </div>
          </div>
      </header>
      <h2 className='text-black font-semibold'>What are eatingdisorders?</h2>
      <p>Eating disorders are behavioral conditions characterized by severe and persistent disturbance in eating behaviors and associated distressing thoughts and emotions. They can be very serious conditions affecting physical, psychological and social function. Types of eating disorders include anorexia nervosa, bulimia nervosa, binge eating disorder, avoidant restrictive food intake disorder, other specified feeding and eating disorder, pica and rumination disorder.</p>
      <p className='text-blue-400'>Click on this picture to learn more about Eating Disorders</p>
      <a href="https://www.psychiatry.org/patients-families/eating-disorders/what-are-eating-disorders"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDMg3eDt-elj28-V5pbsrwH6AjKJV7zA4mQ&usqp=CAU"/></a>
      <br/>
      <Link to="/chatboard" className="bg-blue-950 w-52 text-center text-white hover:bg-blue-300 hover:font-bold hover:text-blue-950 rounded-md px-6 py-3">Connect with your peers</Link><br/>
      <br/>
      
      <Link to="/support" className="bg-blue-950 w-52 text-center text-white hover:font-bold hover:bg-blue-300 hover:text-blue-950 rounded-md px-6 py-3">Get help from our support team</Link>
      <footer className="flex  items-center gap-20 justify-center bg-blue-950 text-blue-300 py-6 fixed bottom-0 h-10 w-full">
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
