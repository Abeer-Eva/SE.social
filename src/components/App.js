import { BrowserRouter, Routes, Route, Navigate, useNavigate, } from "react-router-dom";
import React, { useState }  from 'react';
import { AuthProvider, useAuth } from "../context/AuthContext"
import PostPage from './PostPage'
import '../App.css'
import SignIn from "./SignIn";
import { useStateValue } from "./stateProvider";
import { auth } from "../components/firebase";
import { signOut} from 'firebase/auth'
;
import { Logout } from "@mui/icons-material";

function App() {
 
 const {logout}= AuthProvider();
  const [{user}, dispatch] = useStateValue() //får användardatan här från reducer
  
 async function handlelogout() {
    console.log('lougout func')
      await logout();
  
}
   
  return (
    
 
    <div className='App' style={{ fontFamily: 'Avenir' }}>
      <div className='header'><p>Logo</p>
      < button className="logout"  variant="link"  onClick= {handlelogout}>
       <Logout/></button></div>
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
