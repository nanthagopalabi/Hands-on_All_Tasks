import React, { useState } from 'react';

function AddTodo({ addTodo }) {
    const [todoName, setTodoName] = useState('');
    const [todoDescription, setTodoDescription] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (todoName.trim() && todoDescription.trim()) {
            addTodo(todoName, todoDescription); 
            setTodoName('');
            setTodoDescription('');
        }
    };

    return (
        <div className="headtags">
            <form onSubmit={handleSubmit}>
                <input 
                    value={todoName}
                    onChange={e => setTodoName(e.target.value)}
                    placeholder="Todo Name"
                />
                <input
                    value={todoDescription}
                    onChange={e => setTodoDescription(e.target.value)}
                    placeholder="Todo Description"
                />
                <button id="green" type="submit">Add Todo</button>
            </form>
        </div>
    );
}

export default AddTodo;
