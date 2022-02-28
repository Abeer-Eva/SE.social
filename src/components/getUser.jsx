import React, { useState } from 'react';
import 'firebase/app';
import { auth, db } from "./firebase";
import { useStateValue } from './stateProvider';
import { actionTypes } from './reducer';
import { collection, getDocs } from "firebase/firestore";




// Sign out anv av en redirect.
const GetUsers = () =>{
    const [list ,SetList]= useState([])
    //  const [state, dispatch] = useStateValue() //låter oss ta information från datan

        const getAllUsers = async () => {
        const usersSnapshot = await getDocs(collection(db, "postData"));

        
        const usersList = usersSnapshot.docs.map((doc) => doc.data());
     
        SetList(usersList);
        return usersList;
    
        
    };  
        // dispatch ({
        //     type: actionTypes.GET_USRES,
        //     user: '', //pushar svaret in till actiontypes användardata
        // })
        getAllUsers();
    
    return (
        <div  >
            <div className='UsersList'>
              {list.map(users=>(
                     <section key={users.id} className="user-card">
                     <h3>{users.userName}</h3>
                    
                </section>))
              }
                
            </div>
        </div>
    );
  
}

export default GetUsers