import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ResetNewPassword() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: '',
    confirm_password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      console.error("Passwords do not match!");
      return; // Exit the function early.
    }

    try {
      const response = await axios.post('https://6515c15bcf81004207cf653a--chic-entremet-8ee05c.netlify.app//confirmation', formData);
      console.log(response.data);
      navigate('/Home');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Reset New Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
            onChange={handleChange}
            value={formData.password}
            required
            autoComplete="new-password"
          />
        </div>
        <div>
          <label htmlFor='confirm_password'>Confirm Password:</label>
          <input
            type='password'
            id='confirm_password'
            name='confirm_password'
            onChange={handleChange}
            value={formData.confirm_password}
            required
            autoComplete="new-password"
          />
        </div>
        <button type='submit'>Save Password</button>
      </form>
    </div>
  );
}

export default ResetNewPassword;
