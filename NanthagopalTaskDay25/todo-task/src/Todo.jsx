import React, { useState } from 'react';

function Todo(props) {
  const contents=['Name','Description','Status'];
  const [isOpen, setIsOpen] = useState(false);
  const options = ['Completed', 'Not Completed'];
  return (
    <div>
        <h3>My todos</h3>
        <p>{props.name}</p>
        <button>Edit</button>
        <button>Delete</button>
        <div>
        <button onClick={() => setIsOpen(!isOpen)}>Select an option</button>
        {isOpen && (
        <div>
          {options.map(option => (
            <button key={option} onClick={() => console.log(option)}>
              {option}
            </button>
          ))}
        </div>
        )}
        </div>
    </div>
  )
  }
export default Todo