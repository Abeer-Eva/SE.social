import React from 'react';
import { GoogleOutlined, FacebookOutlined, EmailOutlined} from '@ant-design/icons'
import 'firebase/app';
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { useStateValue } from './stateProvider';
import { actionTypes } from './reducer';


// Sign in using a redirect.
const SignIn = () =>{
    
    const [state, dispatch] = useStateValue() //låter oss ta information från datan

    const SignInFirebase = () => {
        signInWithPopup(auth, provider)
        .then(result =>{
           dispatch ({
               type: actionTypes.SET_USER,
               user: result.user, //pushar svaret vi får när man loggar in, in till actiontypes användardata
           })

            console.log(result)
        }).catch(error => alert(error.message))
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

           
          

            </div>
        </div>
    );
   
}

export default SignIn