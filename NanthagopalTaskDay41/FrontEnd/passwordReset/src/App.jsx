import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Reset from './reset';
import Home from './Home';
import PasswordResetForm from './PasswordResetForm';

function App(props) { // Define props as an argument here
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Password Reset Flow</h1>
          {token && <button onClick={logout}>Logout</button>}
        </header>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/login" element={token ? <Navigate to="/home" /> : <Navigate to="/login" />}/>
          <Route path="/reset-password" element={<Reset />} />
          <Route path="/reset-password/:id/token" element={<PasswordResetForm />}/>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
