import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";
import React  from 'react';
import { AuthProvider } from "../context/AuthContext"
import PostPage from './PostPage'
import '../App.css'
import SignIn from "./SignIn";
import { useStateValue } from "./stateProvider";
import SignOut from "./SignOut";
import GetUsers from "./getUser";
import DirectChatPage from "./Chats";

function App() {
  
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
            <Route path="post/getusers" element={<GetUsers/> }/>
            <Route path="post/chat" element={<DirectChatPage/>}/>
         
      </Routes>
      </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
