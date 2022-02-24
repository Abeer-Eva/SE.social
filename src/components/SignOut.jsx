import React from 'react';
import { GoogleOutlined, FacebookOutlined, EmailOutlined} from '@ant-design/icons'
import 'firebase/app';
import { auth, provider } from "./firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useStateValue } from './stateProvider';
import { actionTypes } from './reducer';
import { Navigate } from 'react-router-dom';
import SignIn from './SignIn';


// Sign out anv av en redirect.
const SignOut = () =>{
    
    const [state, dispatch] = useStateValue() //låter oss ta information från datan

    const SignOutFirebase = () => {
        signOut(auth)
    .then(() => {
        console.log('logged out');
        dispatch ({
            type: actionTypes.SET_USER,
            user: '', //pushar svaret vi får när man loggar in, in till actiontypes användardata
        })
    })
    .catch((error) => {
        console.log(error);
    });
         }
        
//  console.log(auth);
// console.log(provider);
    return (
        <div id="logOut-page ">
            <div id="logOut-card">
                <h2> logga ut</h2>
                < button className="logout" onClick={()=>SignOutFirebase
                ()}> logout</button>
            </div>
        </div>
    );
   
}

export default SignOut