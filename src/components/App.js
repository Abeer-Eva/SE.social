import { BrowserRouter, Routes, Route } from "react-router-dom";
import React  from 'react';
import { AuthProvider } from "../context/AuthContext"
import PostPage from './PostPage'
import '../App.css'
import SignIn from "./SignIn";

function App() {
 
 

  return (
    
 
    <div className='App' style={{ fontFamily: 'Avenir' }}>
  
      <BrowserRouter>
      <AuthProvider> 
       <Routes>
        
            {/* <Route path="/chats" component={Chats} />*/}
            <Route path="/" element={<SignIn/>} />
            <Route path="post" element={<PostPage/>} /> 
         
      </Routes>
      </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
