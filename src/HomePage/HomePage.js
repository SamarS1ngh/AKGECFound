import PropTypes from 'prop-types'
import React from 'react';
import {useNavigate,useEffect} from 'react-router-dom'
import { useState } from 'react'
import '../firebase.js'
import { auth, db } from '../firebase'; 
import {
    getFirestore,
    getDocs,
    doc,
    updateDoc,
    serverTimestamp,
    collection, 
    addDoc,
    setDoc,
    getDoc,
  } from "firebase/firestore";
  

 function Homepage(props) {

    const navigate = useNavigate();
   
    
  // 
  //  const querysnapshot = getDocs(doc(collection(db,"reports/"+auth.currentUser.email,auth.currentUser.uid)))
  //  const data= [];
  //  querysnapshot.forEach(doc=>{
  //   data.push({description:doc.data.description})
  //  });
  //  setdatatoshow(data);

  return (
    <>
    <nav className='bg-black text-white'>
      <div className='flex flex-row justify-around'>
hello
      </div>
    <div className='  '>
        <div>
            Lost Something?
        </div>
        <div>
        <button
          onClick ={()=>navigate('/UploadReport')}>Report</button>
        </div>
        


    </div>
    </nav>

    <div className='bg-white text-black'>
    <p>
      
    </p>
    </div>



    </>
  )

}

Homepage.propTypes = {}

export default Homepage
