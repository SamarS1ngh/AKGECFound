import React, { useState,useEffect } from 'react'
import '../App.css';
import PropTypes from 'prop-types'
import '../firebase.js'
import { async } from '@firebase/util';
import { registerWithEmailAndPassword } from '../firebase.js';
import { useNavigate,Link } from 'react-router-dom';
import '../footer/footer.js'



function Register(props) {
const navigate = useNavigate();
const [name,setname]=useState("");
const [email,setemail]=useState("");
const [password,setpassword] =useState("");


const validate=() => {
if(email.length==0 || name.length==0 || password.length==0){
  return true;
}
else{
  return false;
}
};

console.log(email,password);
 
  return (
    
    <div>
   <div className='content-container'>

   <div className=' flex flex-row justify-end'>
      <button  type="button"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    className="inline px-6 py-2.5 bg-purple-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-800 hover:shadow-lg focus:bg-purple-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>{
        navigate('/Login');
      }}>Login</button>
  </div>
    
  
  <div className="min-h-fullscreen h-screen flex items-center justify-end px-20  text-white ">

      <div className='box-border h-auto w-96 p-7 border-2 bg-black opacity-80 flex flex-col space-y-10 flex-nowrap rounded-3xl font-mono '>
    
      <div>
      <label>Choose a Cool Nickname</label>
      <input className='w-80 px-4 text-white bg-black' type="text" required placeholder='e.g: Lucifer Morningstar' onChange={(e)=>setname(e.target.value)} value={name} />
      </div>
      
     <div>
     <label>Give Your Email-Id</label>
      <input className='w-80 px-4 text-white bg-black opacity-100' type="email"  placeholder="e.g: abc@gmail.com" required onChange={(e)=>setemail(e.target.value)} value={email}/>
     </div>
      <div>
      <label>Set your Password</label>
      <input className='w-80 px-4 text-white bg-black' type="password" placeholder='Shhhh!!! It is a secret' required onChange={(e)=>setpassword(e.target.value)} value={password} />
      </div>
        
      <div className='flex flex-row justify-center'>
      <button  
      type="button"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      className="inline-block px-6 py-2.5 bg-purple-900 opacity-80 cursor-pointer text-white text-opacity-100 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-800 hover:shadow-lg focus:bg-purple-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      onClick = {async ()=>{                         
        await registerWithEmailAndPassword(name,email,password);
        navigate('/Login');
      }
      } disabled = {validate()}>Create Account</button>  
</div>
      <div className='flex flex-col items-center'>
        <label>Already Registered?</label>
        <div>
        </div>

        <div id="link">
      <Link to='/Login' className="text-orange-400 active:text-violet-500 hover:text-amber-400 shadow-2xl transition duration-200">Let's Go!</Link>
        </div> 
        </div> 

      
      </div>
      </div>
      </div>

      
      <div className='footer--pin h-auto text-white'>
        
      <footer />
        
    
      </div>
      
    </div>
  )
}

Register.propTypes = {}

export default Register
