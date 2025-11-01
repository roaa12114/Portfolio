import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcomepage from './components/welcomepage.jsx';
import About from "./components/about.jsx";
import Navbar from "./components/navbar.jsx";
import Projects from "./components/projects.jsx";
import Contact from "./components/contacts.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';


function App() {
  return (
  <div className="App">
    <Welcomepage/>
    <About/>
    <Projects/>
    <Contact/>
  </div>
  
  );
}

export default App;
