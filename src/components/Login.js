import React from 'react';
import { GoogleOutlined, FacebookOutlined} from '@ant-design/icons'
import 'firebase/app';
import {auth} from './firebase';
import {signInWithRedirect, GoogleAuthProvider } from "firebase/auth";


// // Sign in using a redirect.
// const provider = new GoogleAuthProvider();
// // Start a sign in process for an unauthenticated user.
// provider.addScope('profile');
// provider.addScope('email');
// await signInWithRedirect(auth, provider);
const Login =() =>{
    return (
        <div id="login-page ">
            <div id="login-card">
                <h2> Welcome</h2>
                <div className='login-button  google' onClick={()=> auth.signInWithRedirect(new firebase.auth.GoogelAuthProvider())}>
                    <GoogleOutlined/> SIgn in with google
                </div>
                <br/>
                <br/>
                <div className='login-button  facebook'>
                    <FacebookOutlined/> SIgn in with facebook
                </div>
            </div>
        </div>
    );
}

export default Login