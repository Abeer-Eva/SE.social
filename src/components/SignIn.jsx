import React from 'react';
import { GoogleOutlined, FacebookOutlined, EmailOutlined} from '@ant-design/icons'
import 'firebase/app';
import { auth, provider } from "./firebase";
import { signInWithPopup, signInWithRedirect,getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import Login from './Login';

// Sign in using a redirect.
const SignIn = () =>{
  

    const SignInFirebase = () => {
        signInWithRedirect(auth, provider)
  
  
      
         }
        
//  console.log(auth);
// console.log(provider);
    return (
        <div id="login-page ">
            <div id="login-card">
                <h2> Welcome</h2>

                <div className='login-button  google' onClick={SignInFirebase} >
                
                    <GoogleOutlined/> SIgn in with google
                </div>
                <br/>
                <br/>
                <div className='login-button  facebook' onClick={SignInFirebase}>
                    <FacebookOutlined/> SIgn in with facebook
                </div>
                <br/>
                <br/>
                <div className='login-button  email' onClick={Login} >
                Sign in with Epost
                </div>
           
          

            </div>
        </div>
    );
   
}

export default SignIn