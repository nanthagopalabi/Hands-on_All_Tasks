import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import SampleList from './SampleList.jsx';
import AddTodo from './AddTodo.jsx';

function Root(props) {
   

    const handleAddTodo = (id) => {
        setFirstSampleListId(id);
    };
    
    return (
        <div>
            <App />
            <div id="tags">
                <SampleList id={1} deleteTodo={() => {}} />
                <SampleList id={2} deleteTodo={() => {}} />
                <SampleList id={3} deleteTodo={() => {}} />
                <SampleList id={4} deleteTodo={() => {}} />
            </div>
            
        </div>
    );
}

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>
);
