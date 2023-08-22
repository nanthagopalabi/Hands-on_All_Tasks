import React, { useState } from 'react';
import SampleList from './SampleList';
import AddTodo from './AddTodo';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [todos, setTodos] = useState([]);
    const [editedText, setEditedText] = useState('');
    const [newTodoName, setNewTodoName] = useState('');

    const options = ['All', 'Completed', 'Not Completed'];

     const handleAddTodo = newTodoName => {
        setNewTodoName(newTodoName); 
    };

    const handleEditClick = (todoId) => {
        const todoToEdit = todos.find(todo => todo.id === todoId);
        setEditedText(todoToEdit.text);
        setIsEditing(todoId);
    };

    const handleSaveEdit = (todoId) => {
        toggleTodo(todoId, editedText);
        setIsEditing(null);
        setEditedText('');
    };

    const toggleTodo = (id, text) => { 
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, text: text } : todo
        );
        setTodos(updatedTodos);
    };

    const deleteTodo = id => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    const addTodo = (name, description) => {
        const newTodo = {
            id: Date.now(),
            text: name, // Change 'name' to 'text'
            description: description,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    return (
        <div>
            <div className="App">
                <h1>My Todo</h1>
                <AddTodo addTodo={addTodo} />
                {todos.map(todo => (
                <SampleList key={todo.id} id={todo.id} name={todo.text} description={todo.description} deleteTodo={deleteTodo} />
                ))}
            </div>
            <div className='dropdown'>
                <button onClick={() => setIsOpen(!isOpen)}>Status Filter:</button>
                {isOpen && (
                    <ul>
                        {options.map(option => (
                            <li key={option}>{option}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default App;
