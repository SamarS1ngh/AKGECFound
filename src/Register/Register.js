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


const validate = () => {
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
    
  <div id="body" className=' flex-row flow-root'>
<div id="intel" className='text-white text-lg  mx-10  float-left mt-10'>
<div className='box-border h-auto  p-7 border-2 bg-black opacity-90 flex flex-col space-y-10 flex-nowrap rounded-3xl font-mono '>
<div id="logo">

</div>

We have built AKGECFound for the sole purpose helping the AKGEC 
<br></br>
community to find their beloved items.
</div>

</div>










  <div id="registerbox" className="min-h-fullscreen h-screen flex items-center  float-right px-16 text-white ">

      <div className='box-border h-auto w-96 p-7 border-2 bg-black opacity-80 flex flex-col space-y-10 flex-nowrap rounded-3xl font-mono '>
    
      <div>
      <label>Choose a Cool Nickname</label>
      <input className='w-80 px-4 text-white bg-black' type="text" required placeholder='e.g: Lucifer Morningstar' onChange={(e)=>setname(e.target.value)} value={name} />
      </div>
      
     <div>
     <label>Give us your Email-Id</label>
      <input className='w-80 px-4 text-white bg-black opacity-100' type="email"  placeholder="e.g: abc@gmail.com" required onChange={(e)=>setemail(e.target.value)} value={email}/>
     </div>
      <div>
      <label>Set up your Password</label>
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
      </div>
      
      <div id="footer" className='footer--pin h-auto text-white'>
      <div className='bg-black  text-white  flex flex-col'>

<div className='flex flex-grow border-t border-white mb-14'></div>
<div id="about" className='items-center flex flex-col justify-center  '>


  <div className='text-2xl py-4 font-bold'>
    WHO ARE WE?
  </div>
<div className='py-4'>
    Samar Singh
  
</div>
<div className='py-4'>
    Shipra Tripathi
</div>
<div className='py-4 mb-14'>
    Saumya Srivastava
</div>



</div>

<div id="contact"  className='flex flex-row justify-around '>

<div id="linkedin">
<div className='flex flex-row   mb-7 text-3xl font-bold'>
Connect with us <img src="https://www.dlf.pt/png/big/9/96785_white-linkedin-icon-png.png" className='bg-grey-900 h-9 px-4' />
</div>
<div className='flex flex-col'>
  <a href="https://www.linkedin.com/in/samar-singh-a79b36220/" className='px-16 py-1 hover:underline'>Samar Singh</a>
  <a href="https://www.linkedin.com/in/shipra-tripathi-b49218227/" className='px-16 py-1 hover:underline'>Shipra Tripathi</a>
  <a href="https://www.linkedin.com/in/saumya-srivastava-828249252/" className='px-16 py-1 hover:underline'>Saumya Srivastava</a>
</div> 

</div>

  <div id="insta" >

  
<div className='flex flex-row   mb-5 text-3xl font-bold'>
Find us on Instagram <img src="https://www.pngmart.com/files/13/Insta-Logo-PNG-Pic.png" className='bg-grey-900 h-11 px-2' />
</div>

<div className='flex flex-col'>
  <a href="https://www.instagram.com/s.a.m.ar._/" className='px-16 py-1 hover:underline'>Samar Singh</a>
  <a href="https://www.instagram.com/shipratripathi16/" className='px-16 py-1 hover:underline'>Shipra Tripathi</a>
  <a href="https://www.instagram.com/saumyxa/" className='px-16 py-1 hover:underline'>Saumya Srivastava</a>
</div> 
</div>

<div id="email" >
<div className='flex flex-row   mb-6 text-3xl font-bold'>
E-mail Us <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/da5056e3-da67-4ecb-a7f0-9dfba254e40e/ddpribr-f16837f3-2840-406c-906e-90c2ae875d5e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RhNTA1NmUzLWRhNjctNGVjYi1hN2YwLTlkZmJhMjU0ZTQwZVwvZGRwcmlici1mMTY4MzdmMy0yODQwLTQwNmMtOTA2ZS05MGMyYWU4NzVkNWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Cv1o28OmnSBUErr8VvRgvSYUrat1YFjdbVHUdOO8SLA" className='bg-grey-900 h-7 px-4' />
</div>
<div className='py-1'>
singhsamar2002@gmail.com
</div>
<div className='py-1'>
shipratripathi.500@gmail.com
</div>
<div className='py-1'>
saumya.srivastava957@gmail.com
</div>
</div>
</div>

<div className='flex mt-12 flex-grow border-t border-white'></div>
</div>
      </div>
      
    </div>
  )
}

Register.propTypes = {}

export default Register
