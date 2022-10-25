import React from 'react'
import {useNavigate} from 'react-router-dom'
//import PropTypes from 'prop-types'



function HomePage(props) {

const navigate = useNavigate();


const loginportal = () => {
  navigate('/Login');
  alert("hi there");                  
};

  return (
   
    <div>
        <div className='NavBar'>
        <h2>BIDIT</h2>
        <h3>About</h3>
        <h3>Contact Us</h3>
        <h3>Products</h3>
         
          <button onClick={loginportal}>Login</button>
       
        </div>
       
    
    </div>
   
  )
}

HomePage.propTypes = {}

export default HomePage
