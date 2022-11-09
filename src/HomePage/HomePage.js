import React from 'react';
import { auth, db } from '../firebase';
import { storage } from '../firebase';
import {  ref, getDownloadURL ,  getStorage, uploadBytesResumable} from "firebase/storage";
import { v4 } from "uuid";

import { useState, useRef } from 'react';
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


function HomePage(props) {




  const [image, setimage] = useState();                

 const onsubmithandler = async (e) => {
    
    e.preventDefault();
    console.log("submitting");
   
    
    await setDoc(doc(db,"reports",auth.currentUser.uid),{ 
      
      description: descref.current.value,
      email: auth.currentUser.email,
      timestamp: serverTimestamp(),
     
    
    }).then(async () =>{
      if (image) {
     
        const storageRef = ref(storage,`images/${ image.name + auth.currentUser.uid }`)
    const uploadTask =  uploadBytesResumable(storageRef,image);
    setimage(null);  
    uploadTask.on(
      'state_changed',
      null,        
      (err) => console.log(err),
      () => {
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
              console.log(url);

                
                await setDoc(doc(db,'reports', auth.currentUser.uid ),{imgurl:url},{merge:true});
             // setimgurl(url);   
          });
      }
  );         
  
        alert('Reported'); 
       setinput("")
       
      }
    })
  }

  const fileref = useRef(null);
  const descref = useRef(null);

  const addImage = (e) => {
    e.preventDefault();
    setimage(e.target.files[0]);
    // const reader = new FileReader();
    // if (e.target.files[0]) {
    //   reader.readAsDataURL(e.target.files[0])
    // }
    // reader.onload = (readerEvent) => {
    //   setimage(readerEvent.target.result);
    // }
   
  }

    const [input,setinput] =useState("");                                                           
const manageinput =(e)=>{
  setinput(e.target.value);
};


  return (

    <div className='text-white flex flex-col py-20 items-center '>
      <form >

        <div>
          Write description of your item
        </div>

        <input type="file" accept="image/*" hidden ref={fileref} onChange={addImage} />
          
        <div>
          <div className='hover:cursor-pointer' onClick={() => fileref.current.click()}>Upload Image</div>
        </div>
        <div>
          <input type="textarea" value={input} onChange={manageinput} ref={descref} placeholder="e.g: my bottle was red..." className="text-black px-2 py-1 " />
        </div>
        <div>
          <p>
            {image && (
              <img style={{ height: 100 }}
                src={URL.createObjectURL(image)} />
            )
            }
          </p>
        </div>
        <button onClick={onsubmithandler}>Report</button>
      </form>

    </div>
  )
}
HomePage.propTypes = {}
export default HomePage
