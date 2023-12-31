import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        firstname: '',
        lastname: '',
        password: ''
    });
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://6515c15bcf81004207cf653a--chic-entremet-8ee05c.netlify.app/api/register', formData);
            console.log(response.data);
            navigate('/login');
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <div>
        <h2>Register</h2>
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
                <label htmlFor='firstname'>Firstname:</label>
                <input
                    type='text'
                    id='firstname'
                    name='firstname'
                    onChange={handleChange}
                    value={formData.firstname}
                    required
                ></input>
            </div>
            <div>
                <label htmlFor='lastname'>Lastname:</label>
                <input
                    type='text'
                    id='lastname'
                    name='lastname'
                    onChange={handleChange}
                    value={formData.lastname}
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
            <button type="submit">Register</button>
        </form>
    </div>
  )
}
export default Register