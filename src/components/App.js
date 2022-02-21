import { BrowserRouter, Routes, Route } from "react-router-dom";
import React  from 'react';
import { AuthProvider } from "../context/AuthContext"
import PostPage from './PostPage'
import '../App.css'
import SignIn from "./SignIn";
import Login from "./Login";
import Chats from "./Chats";


function App() {
 
 

  return (
    
 
    <div className='App' style={{ fontFamily: 'Avenir' }}>
 
      <BrowserRouter>
      <AuthProvider> 
       <Routes>
        
      
            <Route path="/" element={<SignIn/>} />
            {/* <Route path="/login" element={<Login/>} /> */}
            <Route path="/chats" element={<Chats/>} />
            <Route path="post" element={<PostPage/>} /> 
         
      </Routes>
      </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
