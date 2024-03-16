import './App.css';
import Drives from './components/Drives';
import Login from './components/login/Login';
import Dashboard from './components/dashboard';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { useState } from 'react';


function App() {

  const [USER,setuser] = useState("");

  return ( 
    <div className="app-body">
      <Routes>
        <Route path="/" element={<Login user={setuser} />} />  
        <Route path="/dashboard/*" element={<Dashboard USER={USER}/>} />
      </Routes>      
    </div>
    
  );
}

export default App;
