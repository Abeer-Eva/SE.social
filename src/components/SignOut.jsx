import React from 'react';
import 'firebase/app';
import { auth } from "./firebase";
import {  signOut } from "firebase/auth";
import { useStateValue } from './stateProvider';
import { actionTypes } from './reducer';
import { SignpostOutlined } from '@mui/icons-material';
import Button from '@mui/material/Button';



// Sign out anv av en redirect.
const SignOut = () =>{
    
    const [state, dispatch] = useStateValue() //låter oss ta information från datan

    const SignOutFirebase = () => {
        signOut(auth)
    //    .then(() => {
       console.log('logged out');
        dispatch ({
            type: actionTypes.SET_USER,
            user: '', //pushar svaret in till actiontypes användardata
        })
    // })
    // .catch((error) => {
    //     console.log(error);
    // });
         }
        
//  console.log(auth);
// console.log(provider);
    return (
        <div id="logOut-page ">
            <div id="logOut-card">
                < Button className="logout" onClick={()=>SignOutFirebase
                ()}><SignpostOutlined/></Button>
            </div>
        </div>
    );
   
}

export default SignOut