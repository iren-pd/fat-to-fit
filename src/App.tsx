import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LoginPage } from './pages/Login/LoginPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<div>Register</div>} />
        <Route path="/profile" element={<div>Profile</div>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
