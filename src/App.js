import React from 'react';
import "./index.css";
// import './App.css';

// Calling to all pages/routes
import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";
import Contact from "./routes/Contact";

//Importing the route
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    
    //============ routing the pages=================
    <Routes>
      {/* inside route we have to call route which is self closing 
      and give URL and calling to page*/}
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    
  );
}

export default App;
