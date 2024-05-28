// src/components/Login.js
import React, { useState } from 'react';

const Login = () => {
  const [token, setToken] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('token', token);
    alert('Token saved!');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <button type="submit">Save Token</button>
      </form>
    </div>
  );
};

export default Login;
