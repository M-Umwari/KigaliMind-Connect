import { useState } from 'react';
import { signIn, signUp } from '../services/authentication';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate = useNavigate()

  const  handleLogin=async (e)=>{
    e.preventDefault();
   const user= await  signIn(email,password);
    if(user){
      setIsSignedIn(true)
    }
  }

  if (isSignedIn) navigate('/home')

  const handleSignUp=async (e)=>{
    e.preventDefault();
 return await signUp(email,password);
}
  return (
    <form method='POST' className='grid h-screen place-content-center  gap-5 bg-blue-900 classname = text-blue-300 font-extrabold'>
   
      <label className=' flex items-center justify-center gap-4'>
        Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required  className='border border-blue-950  rounded-md'/>
      </label>
      <label className=' flex items-center justify-center gap-4'>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className='border border-blue-950  rounded-md' />
      </label>
     <div className='flex flex-col gap-5 items-start'>
     <button type='submit' onClick={handleLogin}>Login</button>
     <p>You don't have an account?</p>
      <button type='submit' onClick={handleSignUp}>Sign Up</button>
     </div>
     <p className='justify-items-end gap-11'>
      <br/>
      <br/>
      <br/>
      <br/>
          ---- It's a pleased you want to join this community ---- </p>
    </form>
  );
}
