import { BrowserRouter, Routes, Route, Navigate, useNavigate, } from "react-router-dom";
import React  from 'react';
import { AuthProvider } from "../context/AuthContext"
import PostPage from './PostPage'
import '../App.css'
import SignIn from "./SignIn";
import { useStateValue } from "./stateProvider";
import {signOut } from "firebase/auth";

function App() {
 
 
  const [{user}, dispatch] = useStateValue() //får användardatan här från reducer

  const logout = () => {
    console.log('logout')
    signOut().then(() => {
      // Sign-out successful.
      alert("Successfully signed out!");
    }).catch((error) => {
      // An error happened.
    });;

   
  };
  return (
    
 
    <div className='App' style={{ fontFamily: 'Avenir' }}>
      <div className='header'><p>Logo</p>
      < button clbassName="logout" onClick={()=>logout
      ()}> logout</button></div>
      <BrowserRouter>
      <AuthProvider> 
       <Routes>
             <Route path="/" element={user ? < Navigate to='post' /> : <SignIn/>} /> {/*om användare finns så byt sida till post annars stanna på login-sidan */}
            <Route path="post" element={<PostPage/>} /> 
         
      </Routes>
      </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
