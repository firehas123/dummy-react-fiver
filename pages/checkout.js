import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('134.255.234.247:8800/api/auth/register', { username, password });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('134.255.234.247:8800/api/auth/login', { username, password });
      const token = response.data.token;
      localStorage.setItem('token', token);
      console.log(token);
    } catch (error) {
      console.error(error);
      // Display error message
    }
  };

  const handleToggleMode = () => {
    setIsLoginMode((prevState) => !prevState);
  };

  return (
    <div>
      {isLoginMode ? (
        <>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Login</button>
        </>
      ) : (
        <>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleSignup}>Signup</button>
        </>
      )}

      <button onClick={handleToggleMode}>{isLoginMode ? 'Switch to Signup' : 'Switch to Login'}</button>
    </div>
  );
};

export default Auth;