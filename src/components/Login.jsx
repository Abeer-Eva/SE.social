 import React from 'react';
 import { GoogleOutlined, FacebookOutlined} from '@ant-design/icons'
 import 'firebase/app';
 import { auth, provider } from './firebase';
 import { signInWithRedirect } from "firebase/auth";



//    Sign in using a redirect.

//    Start a sign in process for an unauthenticated user.
//   provider.addScope('profile');
//   provider.addScope('email');
//   await signInWithRedirect(auth, provider);
 const Login =() =>{

     return (
         <div id="login-page ">
             <div id="login-card">
                 <h2> Welcome</h2>

                 <div className='login-button  google' onClick={()=> signInWithRedirect(new provider())}>
                     <GoogleOutlined/> SIgn in with google
                 </div>
                 <br/>
                 <br/>
                 <div className='login-button  facebook' onClick={()=> signInWithRedirect(new provider())}>
                     <FacebookOutlined/> SIgn in with facebook
                 </div>

             </div>
         </div>
     );
}

export {Login}