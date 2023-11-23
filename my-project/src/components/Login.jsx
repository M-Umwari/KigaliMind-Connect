// Login.js

import React from 'react';
import { useState } from 'react';
export default function Login() {
const Login = ({ setUser }) => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdministrator, setIsAdministrator] = useState(false);

  const handleLogin = () => {
    // Perform login logic (e.g., validate credentials, make API requests)
    // For simplicity, just set a dummy user for demonstration purposes
    const user = {
      username,
      role: isAdministrator ? 'admin' : 'user',
    };

    setUser(user);
    history.push('/dashboard');
  };

  const handleSignUp = () => {
    // Perform sign-up logic (e.g., make API requests to create a new user)
    // For simplicity, just navigate to the sign-up page
    history.push('/signup');
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <label>
        Login as Administrator:
        <input
          type="checkbox"
          checked={isAdministrator}
          onChange={() => setIsAdministrator(!isAdministrator)}
        />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default Login;