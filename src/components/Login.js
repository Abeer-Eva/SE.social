import React from 'react';
import { GoogleOutlined, FacebookOutlined} from '@ant-design/icons'
import 'firebase/app';
import { auth, provider } from './firebase';



// // Sign in using a redirect.

// // Start a sign in process for an unauthenticated user.
// provider.addScope('profile');
// provider.addScope('email');
// await signInWithRedirect(auth, provider);
const Login =() =>{
    return (
        <div id="login-page ">
            <div id="login-card">
                <h2> Welcome</h2>
<<<<<<< HEAD
                <div className='login-button  google' onClick={()=> auth.signInWithRedirect(new provider)}>
                    <GoogleOutlined/> SIgn in with google
                </div>
                <br/>
                <br/>
                <div className='login-button  facebook'>
                    <FacebookOutlined/> SIgn in with facebook
                </div>
=======
                <p>sarah testar</p>
>>>>>>> 7478d326c2b547d4cbcb3b95df0af89801ef791a
            </div>
        </div>
    );
}

export default Login