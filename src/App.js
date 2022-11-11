import './App.css';
import React from 'react';
import { Link } from 'react-scroll';
//import { useNavigate,Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login  from './Login/Login.js';
import Register from "./Register/Register.js";
import HomePage from './HomePage/HomePage.js';
import { AuthCredential } from 'firebase/auth';
//import Reset from "./Reset";
//import Dashboard from "./Dashboard";




function App() {      
      
  return (
    < div >
     <div className='w-auto'>
      
      <nav className='flex flex-row w-full z-10 items-center justify-around font-extrabold text-2xl font-mono bg-black text-gray-200 object-top fixed '>
        
    <a href="/">  <img src='https://bidit.mx/wp-content/uploads/2018/07/cropped-BiDiT_silver.png' className='h-14' /></a>
      <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-white">About</Link>
      <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-white">Contact Us</Link>
      
      
      
    </nav> 
      </div>
      <Router>
    <Routes>
      
      <Route exact path="/" element=<Register /> />
      <Route exact path="Login" element=<Login /> />
       <Route exact path='/HomePage' element=<HomePage /> />                                             
      </Routes>
  </Router>

    </div>
   
  );
}

export default App;
