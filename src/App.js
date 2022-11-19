import './App.css';
import React from 'react';

//import { useNavigate,Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Login  from './Login/Login.js';
import Register from "./Register/Register.js";
import Homepage from './Homepage/Homepage.js';
import UploadReport from './UploadReport/UploadReport.js';
import { AuthCredential } from 'firebase/auth';
//import Reset from "./Reset";
//import Dashboard from "./Dashboard";




function App() {      
      
  return (
    < div >
    
      <Router>
    <Routes>
      
      <Route exact path="/" element=<Register /> />
      {/* <Route exact path="Login" element=<Login /> /> */}
      <Route exact path='/Homepage' element=<Homepage /> />
       <Route exact path='/UploadReport' element=<UploadReport /> />                                             
      </Routes>
  </Router>

    </div>
   
  );
}

export default App;
