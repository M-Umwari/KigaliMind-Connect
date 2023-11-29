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
    <form method='POST' className='grid h-screen place-content-center  gap-5 text-blue-900  bg-blue-300 font-extrabold'>
   
      <label className=' flex items-center justify-center gap-4'>
        Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required  className='border border-blue-950  rounded-md'/>
      </label>
      <label className=' flex items-center justify-center gap-4'>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className='border border-blue-950  rounded-md' />
      </label>
     <div className='flex flex-col gap-2 items-start'>
        <button type='submit' onClick={handleLogin} className='bg-blue-950 w-52 text-center text-white hover:bg-blue-300 hover:font-bold hover:text-blue-950 rounded-md px-6 py-3'>Login</button>
     <p className='ml-16'>You don't have an account?</p>
        <button type='submit' onClick={handleSignUp} className='bg-blue-950 w-52 text-center text-white hover:bg-blue-300 hover:font-bold hover:text-blue-950 rounded-md px-6 py-3'>Sign Up</button>
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
