import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './App.css'
import { MDBBtn } from 'mdb-react-ui-kit';

function App() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setColumns(Object.keys(res.data[0]));
        setRecords(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  function handleSubmit(id) {
    const conf = window.confirm("Do you want to delete?");
    if (conf) {
      axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
          alert('Record has been deleted');
          setRecords(records.filter(record => record.id !== id));
          navigate('/');
        })
        .catch(err => console.log(err));
    }
  }
  const updatedValue=()=>{
    props.handleSubmit1(inputData)
  }
  
  return (
    <div className="container">
      <div className="text-end">
        <MDBBtn>
          <Link to="/create" className="btn btn-primary">+Create</Link>
        </MDBBtn>   
      </div>
      <table className="table">
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            records.map(record => (
              <tr key={record.id}>
                {columns.map(column => (
                  <td key={column}>
                    {typeof record[column] === "object" ? JSON.stringify(record[column]) : record[column]}
                  </td>
                ))}
                <td>
                  <button>
                    <Link to={`update/${record.id}`} className="btn btn-sm btn-success">Update</Link>
                  </button>
                  <button onClick={() => handleSubmit(record.id)} className="btn btn-sm btn-danger">Delete</button>
                </td>
                
              </tr>
             
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
export default App;
 