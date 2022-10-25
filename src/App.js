import './App.css';
import React from 'react';

//import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login  from './Login/Login.js';
import Register from "./Register/Register.js";
import HomePage from './HomePage/HomePage';
//import Reset from "./Reset";
//import Dashboard from "./Dashboard";




function App() {
      
      
      
  return (
    < div >
     <div className='w-auto'>
      
      <div className='flex flex-row items-center justify-around font-extrabold text-lg font-mono bg-black text-white object-top '>
      <img src='https://bidit.mx/wp-content/uploads/2018/07/cropped-BiDiT_silver.png' className='h-14' />
      <h3 className=''>About</h3>
      <h3>Contact Us</h3>
      
      
      
    </div> 
      </div>
      <Router>
    <Routes>
      
      <Route exact path="/" element=<Register /> />
      <Route exact path="Login" element=<Login /> />
                                                    
      </Routes>
  </Router>
    

  


    </div>
   
  );
}

export default App;
