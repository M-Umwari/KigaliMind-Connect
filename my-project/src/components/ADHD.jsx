import {Link} from 'react-router-dom';

export default function ADHD() {
  return (
    <div className='flex flex-col gap-4 bg-white h-screen'>
      <h2 className='text-Blue-500'>What is ADHD?</h2>
      <p>ADHD is a developmental disorder associated with an ongoing pattern of inattention, hyperactivity, and/or impulsivity.The symptoms of ADHD can interfere significantly with an individual’s daily activities and relationships. ADHD begins in childhood and can continue into the teen years and adulthood.</p>
      <p className='font-semibold text-blue-950'>What are the symptoms of ADHD?</p>
      <ul>
        <li>Inattention–having difficulty paying attention</li>
        <li>Hyperactivity–having too much energy or moving and talking too much</li> 
        <li>Impulsivity–acting without thinking or having difficulty with self-control</li>
      </ul>
      <a href='https://www.nimh.nih.gov/health/publications/adhd-what-you-need-to-know' className='text-blue-500 font-semibold'>Learn more about ADHD</a>
      
      <Link to="/chatboard" className="bg-blue-950 w-52 text-center text-white hover:bg-blue-300 hover:font-bold hover:text-blue-950 rounded-md px-6 py-3">Connect with your peers</Link>
      <Link to="/support" className="bg-blue-950 w-52 text-center text-white hover:font-bold hover:bg-blue-300 hover:text-blue-950 rounded-md px-6 py-3">Get help from our support team</Link>
      <footer className="flex  items-center gap-20 justify-center bg-blue-950 text-blue-300 fixed bottom-0 h-16 w-full">
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
