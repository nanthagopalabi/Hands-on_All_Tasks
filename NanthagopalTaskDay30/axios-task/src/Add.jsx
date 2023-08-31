import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import App from './App';


function Add() {
    const [inputData, setInputData] = useState({ name: '',username:'',address:"",phone:"",website:"",company:"" });
    const navigate = useNavigate();

    function handleSubmit1(event) {
        event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/users', inputData)
            .then(res => {
                alert("Data Added Successfully!!!");
                console.log(inputData);
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='editforms'>
            <div className='w-50 border bg-light p-5'>
                <form onSubmit={handleSubmit1}>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input
                            type='text'
                            name='name'
                            className='form-control'
                            onChange={e => setInputData({ ...inputData, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor='username'>Username:</label>
                        <input
                            type='usename'
                            name='username'
                            className='form-control'
                            onChange={e => setInputData({ ...inputData, username: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='email'
                            name='email'
                            className='form-control'
                            onChange={e => setInputData({ ...inputData, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor='address'>Address:</label>
                        <input
                            type='address'
                            name='address'
                            className='form-control'
                            onChange={e => setInputData({ ...inputData, address: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor='phone'>Phone:</label>
                        <input
                            type='phone'
                            name='phone'
                            className='form-control'
                            onChange={e => setInputData({ ...inputData, phone: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor='website'>Website:</label>
                        <input
                            type='website'
                            name='website'
                            className='form-control'
                            onChange={e => setInputData({ ...inputData, website: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor='company'>Company:</label>
                        <input
                            type='company'
                            name='company'
                            className='form-control'
                            onChange={e => setInputData({ ...inputData, company: e.target.value })}
                        />
                    </div><br />

                    <button className='btn btn-info'>Submit</button>
                </form>
                
            </div>
        </div>
    );
}

export default Add;
