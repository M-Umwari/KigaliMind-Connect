import { Link } from "react-router-dom";
import { auth } from '../services/authentication';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
export default function Depression() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col gap-4">
      <header className="bg-blue-950 text-blue-300 px-20 h-1/4 ">
        {/* Logo */}
        <div className=" rounded-full my-3 ">         
             <img src='src/assets/Images/logo.png' className=" h-60 rounded-full" />
          </div>
      </header>
      <div>
      <h2 className="text-xl font-semibold">What is depression?</h2>
      
        <p>Depression is a mood disorder that causes a persistent feeling of sadness and loss of interest. Also called major depressive disorder or clinical depression, it affects how you feel, think and behave and can lead to a variety of emotional and physical problems. You may have trouble doing normal day-to-day activities, and sometimes you may feel as if life isn't worth living.</p>

         <p>More than just a bout of the blues, depression isn't a weakness and you can't simply "snap out" of it. Depression may require long-term treatment. But don't get discouraged. Most people with depression feel better with medication, psychotherapy or both.</p>
         <p className="text-blue-300">click on this video to learn more about depression</p>
         <a href="https://youtu.be/d7NPnvKFs2Y"><img src="data:image/jpeg;base64,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"  alt="Understandin depression"/></a>
      </div>
      <Link to="/chatboard" className="bg-blue-950 w-52 text-center text-white hover:bg-blue-300 hover:font-bold hover:text-blue-950 rounded-md px-6 py-3">Connect with your peers</Link>
      <Link to="/support" className="bg-blue-950 w-52 text-center text-white hover:font-bold hover:bg-blue-300 hover:text-blue-950 rounded-md px-6 py-3">Get help from our support team</Link>
      <footer className="flex  items-center gap-20 justify-center bg-blue-950 text-blue-300 fixed bottom-0 h-10 w-full">
        
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
