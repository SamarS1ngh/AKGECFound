import React,{useState} from 'react'
//import PropTypes from 'prop-types';
import '../firebase.js'
import { registerWithEmailAndPassword} from '../firebase.js';
import handlechange from './Register.js'


function Register2(props) {

    const validate = () => {
        if (email.length == 0 || name.length == 0 || password.length == 0) {
          return true;
        }
        else {
          return false;
        }
      };               


  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
   


  const registering=async()=>{
    await registerWithEmailAndPassword(name, email, password);
    alert("Account Created Successfully!")
    
  }
  return (
    <div>
        


<div id="registerbox" className="min-h-fullscreen h-screen flex items-center mt-10 float-right px-16 text-white ">

  <div className='box-border h-auto w-96 p-7 border-2 bg-black opacity-80 flex flex-col space-y-10 flex-nowrap rounded-3xl font-mono '>

    <div>
      <label>Choose a Cool Nickname</label>
      <input className='w-80 px-4 text-white bg-black' type="text" required placeholder='e.g: Lucifer Morningstar' onChange={(e) => setname(e.target.value)} value={name} />
    </div>

    <div>
      <label>Give us your Email-Id</label>
      <input className='w-80 px-4 text-white bg-black opacity-100' type="email" placeholder="e.g: abc@gmail.com" required  onChange={(e) => setemail(e.target.value)} value={email} />
    </div>
    <div>
      <label>Set up your Password</label>
      <input className='w-80 px-4 text-white bg-black' type="password" placeholder='Shhhh!!! It is a secret' required  onChange={(e) => setpassword(e.target.value)} value={password} />
    </div>

    <div className='flex flex-row justify-center'>
      <button
        type="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        className="inline-block px-6 py-2.5 bg-purple-900 opacity-80 cursor-pointer text-white text-opacity-100 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-800 hover:shadow-lg focus:bg-purple-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick= { registering }
         disabled={validate()}>Create Account</button>
    </div>
    <div className='flex flex-col items-center' >
      <label>Already Registered?</label>
      <div>
      </div>
                                                                
      <div id="link">
        <button className='text-lime-400 hover:text-lime-300' onClick={props.handlechange}>Login Here</button>
        {/* <Link2 to='/Login' className="text-orange-400 active:text-violet-500 hover:text-amber-400 shadow-2xl transition duration-200">Let's Go!</Link2> */}

      </div>
    </div>


  </div>


</div>


    </div>
  )
}

Register2.propTypes = {}

export default Register2
