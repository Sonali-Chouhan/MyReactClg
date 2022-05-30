import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Login from "./Component/Login";
import Registration from './Component/Registration';
import Navbar from './Component/Navbar';
import Postnewjob from "./Component/Postnewjob"
import JobSearch from "./Component/JobSearch";
import Contactus from "./Component/Contactus";
import Applyjob from "./Component/Applyjob";
import Feedback from "./Component/Feedback"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path='/userlogin' element={<Login/>} />
          <Route path='/userRegistration' element={<Registration/>} />
          <Route path="/postnewjob" element={<Postnewjob />} />
          <Route path ="/jobsearch" element={<JobSearch/>} />
          <Route path="/contactus" element={<Contactus/>} />
          <Route path="/applyjob" element={<Applyjob />} />
          <Route path="/feedback" element={<Feedback />} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;
