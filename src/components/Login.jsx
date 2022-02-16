import React from 'react';
import { GoogleOutlined, FacebookOutlined} from '@ant-design/icons'
import 'firebase/app';
import { auth, provider } from "./firebase";
import { signInWithPopup, signInWithRedirect,getAuth } from "firebase/auth";






// Sign in using a redirect.
const Login = () =>{
  

    const signIn = () => {
        signInWithPopup(provider)
         }
console.log(provider);
    return (
        <div id="login-page ">
            <div id="login-card">
                <h2> Welcome</h2>

                <div className='login-button  google' onClick={signIn} >
                
                    <GoogleOutlined/> SIgn in with google
                </div>
                <br/>
                <br/>
                <div className='login-button  facebook' onClick={signIn}>
                    <FacebookOutlined/> SIgn in with facebook
                </div>

            </div>
        </div>
    );
   
}

export default Login