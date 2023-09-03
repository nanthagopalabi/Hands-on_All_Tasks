import React, { useEffect, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'; 


function LibraryListing() {
    const[empdata, setEmpdata]=useState([]);
    const navigate=useNavigate();
    
    const LoadDetail=(id)=>{
        navigate('/books/details/'+ id)
    }
    const LoadEdit=(id)=>{
        navigate('/books/edit/'+ id)
    }
    const RemoveFunction=(id)=>{
        if(window.confirm('Do you want to remove?')){
            fetch('http://localhost:4000/books/'+ id,{
          method:"DELETE",
      }).then((res)=>{
        alert('Removed successfully')
        window.location.reload();
      }).catch((err)=>{
          console.log(err.message)
      })
    }
    }

    useEffect(()=>{
        fetch('http://localhost:4000/books')
        .then((res)=>res.json())
        .then((resp)=>{
        setEmpdata(resp);
        }).catch((err)=>{
        console.log(err.message);
        })
    },[])
  return (
    <div className='container'>
        <div className='card'>
            <div className='card-title'>
                <h2>Library Management System</h2>
            </div>
            
            <div className='card-body'>
                <div className='divbtn'>
                    <Link to='/books/create' className="btn btn-lg btn-primary">Add New (+)</Link>
                </div>
                <table className='table table-bordered'>
                    <thead className='bg-dark text-white'>
            <tr className='titleHead'>
                <td>S.No.</td>
                <td>Title</td>
                <td>Author Name</td>
                <td>Author BirthDate</td>
                <td>Author Biography</td>
                <td>ISBN_Number</td>
                <td>PublicationDate</td>
                <td>Action</td>
            </tr>
                    </thead>
                    <tbody>
                    {empdata &&
                        empdata.map((item)=>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.author?.AuthorName}</td>
                                <td>{item.author?.BirthDate}</td>
                                <td>{item.author?.Biography}</td>
                                <td>{item.ISBN_Number}</td>
                                <td>{item.PublicationDate}</td>
                                <td>
                                <a onClick={()=>{LoadEdit(item.id)}} className='btn btn-lg btn-success'>Edit</a>
                                <a onClick={()=>{RemoveFunction(item.id)}} className='btn btn-lg btn-danger'>Remove</a>
                                <a onClick={()=>{LoadDetail(item.id)}} className='btn btn-lg btn-primary'>Details</a>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
export default LibraryListing