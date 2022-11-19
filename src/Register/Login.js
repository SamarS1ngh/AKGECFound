import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { sendPasswordReset } from '../firebase';
import { logInWithEmailAndPassword } from '../firebase.js';
import {useNavigate} from 'react-router-dom'

function Login(props) {

    const [registered, setstate] = useState(false);
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate= useNavigate();
  return (
    <div>



    
<div id="loginbox" className='min-h-fullscreen h-screen py-28 flex items-center float-right px-16 justify-around'>

  <div className='box-border h-auto w-96 border-2 p-7  bg-black text-white  space-y-10 opacity-80 flex flex-col flex-nowrap rounded-3xl font-mono'>
                               
    <div className='space-y-3'>
      <label>Your Email</label>
      <input className='w-80 px-4 text-white bg-black' type="email" name="email" onChange={(e) => { setemail(e.target.value) }} value={email} required placeholder='Enter Your Registered Email' />
    </div>

    <div className='space-y-3'>
      <label>Your Password</label>
      <input className='w-80 px-4 text-white bg-black' type="password" name="password" onChange={(e) => { setpassword(e.target.value) }} value={password} required placeholder='Enter the password' />
    </div>

    <div >
      <div className='flex flex-row justify-around pb-6'>
        <button className='inline px-6 py-2.5 bg-purple-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-800 hover:shadow-lg focus:bg-purple-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
          onClick={async () => {
            try {
              await logInWithEmailAndPassword(email, password);
              navigate("/Homepage")
                

            } catch (error) {
              console.error(error);
              alert("Email or Password not Registered!");
            }
          }
          }>Login</button>
      </div>

      <div className='flex flex-col items-center pb-4'>
        <div>Not Registered?</div>
        <button className='text-lime-400 hover:text-lime-300 ' onClick={props.handlechange}>Create Account</button>
      </div>
      <div className='flex flex-row justify-around' >
        <button className='text-orange-400 hover:underline hover:text-amber-400' onClick={() => { sendPasswordReset(email) }}>Forgot Password?</button>
      </div>

    </div>

  </div>
</div>


    </div>
  )
}

Login.propTypes = {}

export default Login
