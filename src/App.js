import "./App.css";
import Drives from "./components/Drives";
import Login from "./components/login/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
 

  return (
    <div className="app-body">
      <Routes>
        <Route path="/" element={<Login   />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
