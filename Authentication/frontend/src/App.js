import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/Login/LoginForm';
import SignUpForm from './Components/signup/SignupForm';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<LoginForm/>} />
    <Route path="/signup" element={<SignUpForm/>} /> 
    </Routes>
    </BrowserRouter>  
    </div>
    
  );
}

export default App;
