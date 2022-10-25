import React from 'react';
import '../firebase.js';
import {storage} from '../firebase';
import PropTypes from 'prop-types';
import { useState,useEffect } from 'react';
//import { async } from '@firebase/util';
import { logInWithEmailAndPassword } from '../firebase.js';
import {ref,uploadBytes} from "firebase/storage";
import {v4} from "uuid";




function Login(props) {

const [email,setemail]= useState("");
const [password,setpassword]= useState("");
const[image,setimage]=useState(null);

  const uploadimage=()=>{
  if(image==null){
    return;
  }
  const imageref= ref(storage,`imagefolder/${image.name +v4() }`);
  uploadBytes(imageref,image).then(()=>{
    alert("Image Uploaded Successully!");
  })
  }
  
  return (
    <div id="login">
      <div className='min-h-fullscreen h-screen flex py-28 items-center justify-around'>
      <div className='box-border h-80 w-96 border-2 p-7 flex flex-col flex-nowrap bg-black opacity-85 rounded-3xl font-mono'>
     <div className="text-white  space-y-10"> 
     <div>
     <label>Your Email</label>
        <input type="email" name="email" onChange={(e)=>{setemail(e.target.value)}} value={email} required placeholder='Enter Your Registered Email' />
     </div>
   
   <div>
   <label>Your Password</label>
        <input type="password" name="password" onChange={(e)=>{setpassword(e.target.value)}} value={password} required placeholder='Enter the password' />  
   </div>
       

        <button onClick={async ()=>{
          await logInWithEmailAndPassword(email,password);
        }}>Login</button>
    
    <input type="file" onChange={(event)=>{setimage(event.target.files[0])}} />
    <button onClick={uploadimage}>Upload Image</button>
       


     
    
    </div>

     </div>
    

      </div>
     
    </div>
  )
}

Login.propTypes = {}

export default Login;
