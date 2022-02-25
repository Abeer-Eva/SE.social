import React from 'react';
import 'firebase/app';
import { auth } from "./firebase";
import {  signOut } from "firebase/auth";
import { useStateValue } from './stateProvider';
import { actionTypes } from './reducer';
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../components/firebase'; 


// Sign out anv av en redirect.
const Like = () =>{
    
    const [state, dispatch] = useStateValue() //låter oss ta information från datan

  
     const updateLike = async (post) => {
        const likeRef = doc(db, "postData", post.id);
        await updateDoc(likeRef, {
            like:+1
        })
        
            dispatch ({
                type: actionTypes.SET_LIKE,
                user
                //pushar svaret vi får när man loggar in, in till actiontypes användardata
           
        });
    };
         

    
       
   
}

export default Like