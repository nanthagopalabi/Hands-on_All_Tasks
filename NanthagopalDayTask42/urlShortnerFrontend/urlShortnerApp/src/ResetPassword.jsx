import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ResetPassword = ({ setToken }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://6515c15bcf81004207cf653a--chic-entremet-8ee05c.netlify.app/reset-password', {
        email: email, // Include the email in the request body
      });

      const { token } = response.data;
      setToken(token);
      localStorage.setItem('token', token);

      // Assuming the backend sends a confirmation message in response
      console.log(response.data.message);

      // Redirect the user to a confirmation page or any other desired route
      navigate('/confirmation');
    } catch (error) {
      if (error.response) {
        console.error(error.response.data.message);
      } else {
        console.error(error.message);
      }
    }
  };

  const handleBack = () => {
    window.history.back();
    navigate('/login');
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type='submit'>Reset Password</button>
        <button onClick={handleBack}>Back</button>
      </form>
    </div>
  );
};

export default ResetPassword;
