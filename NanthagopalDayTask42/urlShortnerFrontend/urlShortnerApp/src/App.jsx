import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import ResetPassword from './ResetPassword';
import ResetNewPassword from './ResetNewPassword';
import Short_URL from './Short_URL';
import All_URL from './All_URL';
import Dashboard from './Dashboard';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1>MERN Stack User Authentication!</h1>
          {token && <button onClick={logout}>Logout</button>}
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login setToken={setToken} />} />
            <Route path="/home" element={token ? <Home /> : <Navigate to="/login" />} />
            <Route path="/reset-password" element={<ResetPassword setToken={setToken} />} />
            <Route path="/confirmation" element={<ResetNewPassword setToken={setToken} />} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/create" component={Short_URL} />
        <Route path="/urls" component={All_URL} />
        <Route path="/" component={Dashboard} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
