import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";

import {
      getAuth,
      signInWithEmailAndPassword,
      createUserWithEmailAndPassword,
      sendPasswordResetEmail,
      signOut,
    } from "firebase/auth";
    import {
      getFirestore,
      query,
      getDocs,
      collection,
      where,
      doc,
      addDoc,
      setDoc,
    } from "firebase/firestore";
import {useNavigate} from 'react-router-dom';



    const firebaseConfig = {
      apiKey: "AIzaSyBZqNZhpXN1tCSfle5fEh8hw-ikoeU-Jao",
      authDomain: "bidit-71865.firebaseapp.com",
      projectId: "bidit-71865",
      storageBucket: "bidit-71865.appspot.com",
      messagingSenderId: "555888497815",
      appId: "1:555888497815:web:7ac9ab0b5fb2ef0d11c5d2"
    };

const app =initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



export const storage=getStorage(app);

const logInWithEmailAndPassword = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
   /* try {  
      await signInWithEmailAndPassword(auth, email, password);
      
    } catch (err) {
      console.error(err);
      alert("Email or Password not Registered!");
    }*/
  };

  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await setDoc(doc(db, "users",user.uid), {
        uid: user.uid,
        name,
        
        email,
      });
    } catch (err) {
      console.error(err);
      alert("Invalid Email Provided");
    }
  };
  
  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent! Check your spam folder if not received.");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const logout = () => {
    signOut(auth);
  };



  export {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
  };
    