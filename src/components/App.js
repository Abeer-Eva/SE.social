import { BrowserRouter, Routes, Route, Navigate, useNavigate, } from "react-router-dom";
import React, { useState }  from 'react';
import { AuthProvider, useAuth } from "../context/AuthContext"
import PostPage from './PostPage'
import '../App.css'
import SignIn from "./SignIn";
import { useStateValue } from "./stateProvider";
import {signOut } from "firebase/auth";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import SignOut from "./SignOut";

function App() {
 
 const {logout}= AuthProvider();
  const [{user}, dispatch] = useStateValue() //får användardatan här från reducer
  return (
    
 
    <div className='App' style={{ fontFamily: 'Avenir' }}>
      <div className='header'><p>Logo</p>
      <SignOut /></div>
      <BrowserRouter>
      <AuthProvider> 
       <Routes>
             <Route path="/" element={user ? < Navigate to='post' /> : <SignIn/>} /> {/*om användare finns så byt sida till post annars stanna på login-sidan */}
            <Route path="post" element={user ? <PostPage/> : < Navigate to='/' />  } /> 
         
      </Routes>
      </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
