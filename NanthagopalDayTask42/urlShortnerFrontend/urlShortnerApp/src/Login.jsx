import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      username: '',
      firstname: '',
      lastname: '',
      password: '',
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('https://6515c15bcf81004207cf653a--chic-entremet-8ee05c.netlify.app/api/login', formData);
        const { token } = response.data;
        setToken(token); // Store the token in your app.js state
        localStorage.setItem('token', token);
  
        // history.push('/protected');
        navigate('/home');
      } catch (error) {
        if (error.response) {
          console.error(error.response.data.message);
        } else {
          console.error(error.message);
        }
      }
    };
  
    const resetPassword = () => {
      navigate('/reset-password');
    };
  
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='username'>Username:</label>
            <input
              type='email'
              id='username'
              name='username'
              onChange={handleChange}
              value={formData.username}
              required
            ></input>
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              name='password'
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
  