import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Using useNavigate for v6 routing

function AdminLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Simulating API request to fetch credentials from userAuth (backend)
      const response = await axios.post('http://localhost:5000/admin-login', {
        username,
        password,
      });

      // Store token or session data (if applicable)
      localStorage.setItem('adminToken', response.data.token);  // Save token

      // Redirect to Admin Dashboard on successful login
      navigate('/admin-dashboard');  // Use navigate() for routing
    } catch (error) {
      setMessage('Login failed: ' + (error.response?.data?.message || 'Unknown error'));
    }
  };

  return (
    <div>
      <h1>Admin Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default AdminLoginPage;
