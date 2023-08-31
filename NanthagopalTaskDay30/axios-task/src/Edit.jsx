import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Edit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({ id: "", name: "", email: "" });

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [id]);

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Submitting data:", data); 
      
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, data)
            .then(res => {
                console.log("Update response:", res);
                alert("Data updated successfully!");
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='editforms'>
            <div className='w-50 border bg-light p-5'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>ID:</label>
                        <input type='text' disabled name='id' value={data.id} className='form-control' />
                    </div>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input
                            type='text'
                            name='name'
                            value={data.name}
                            className='form-control'
                            onChange={e => setData({ ...data, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor='username'>Userame:</label>
                        <input
                            type='text'
                            name='username'
                            value={data.username}
                            className='form-control'
                            onChange={e => setData({ ...data, username: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='email'
                            name='email'
                            value={data.email}
                            className='form-control'
                            onChange={e => setData({ ...data, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor='address'>Address:</label>
                        <input
                            type='text'
                            name='address'
                            disabled
                            value={data.address}
                            className='form-control'
                            onChange={e => setData({ ...data, address: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor='phone'>Phone:</label>
                        <input
                            type='text'
                            name='phone'
                            value={data.phone}
                            className='form-control'
                            onChange={e => setData({ ...data, phone: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor='website'>Website:</label>
                        <input
                            type='text'
                            name='website'
                            value={data.website}
                            className='form-control'
                            onChange={e => setData({ ...data, website: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor='company'>Company:</label>
                        <input
                            type='text'
                            name='company'
                            value={data.company}
                            disabled
                            className='form-control'
                            onChange={e => setData({ ...data, company: e.target.value })}
                        />
                    </div><br/>
                    <button type='submit' className='btn btn-primary'>Update</button>
                </form>
            </div>
        </div>
    );
}

export default Edit;
