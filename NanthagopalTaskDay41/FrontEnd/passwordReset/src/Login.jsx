import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = ({ setToken }) => {
  const navigate = useNavigate(); // Use the useNavigate hook
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/login-user', formData, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
    
      const data = response.data;
      if (data.status === 'ok') {
        // Login successful, you can redirect to the home page here
        alert('Login successful!');
        setToken(data.token); // Assuming your token is returned from the server
        localStorage.setItem('token', data.token);
        navigate('/home'); // Redirect to the home page
      } else {
        // Login failed, handle the error appropriately
        alert('Login failed. Invalid email or password.');
      }
    } catch (error) {
      // Handle network or server errors
      console.error(error);
      alert('An error occurred during login.');
    }
  };

  const resetPassword = () => {
    navigate("/reset-password");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            required
          ></input>
        </div>
        <button type="submit">Login</button>
        <a onClick={resetPassword}>Forget Password</a>
      </form>
    </div>
  );
};

export default Login;
