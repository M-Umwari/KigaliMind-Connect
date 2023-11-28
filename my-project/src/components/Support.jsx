import { auth } from '../services/authentication';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
export default function Support() {
  const navigate = useNavigate()
  return (
    <>
    <header className="bg-blue-950 text-blue-300 px-20 h-1/4 ">
        {/* Logo */}
        <div className=" rounded-full my-3 ">         
             <img src='src/assets/Images/logo.png' className=" h-60 rounded-full" />
        </div>
      </header>
    <div>Awaiting on ALU's response for collaboration</div>
     
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
    </>
  )
}
