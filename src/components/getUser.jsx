import React, { useState } from 'react';
import 'firebase/app';
import { auth, db } from "./firebase";
import { useStateValue } from './stateProvider';
import { actionTypes } from './reducer';
import { collection, getDocs } from "firebase/firestore";
import { Chat } from '@material-ui/icons';



// Sign out anv av en redirect.
const GetUsers = () =>{
    const [list ,SetList]= useState([])
    const names = []
    //  const [state, dispatch] = useStateValue() //låter oss ta information från datan

        const getAllUsers = async () => {
        const usersSnapshot = await getDocs(collection(db, "postData"));
        const usersList = usersSnapshot.docs.map((doc) => doc.data());
        SetList(usersList);
        return usersList;
    };  
    getAllUsers();
    
        // dispatch ({
        //     type: actionTypes.GET_USRES,
        //     user: '', //pushar svaret in till actiontypes användardata
        // })
        

        const nameIt = list.map(( name =>
                {if(!names.includes(name.userName)) {
                  names.push(name.userName)  
                }
                else{
                    names.splice(names.indexOf(name.userName), 1)
                }}
                ))
            
    return (
        <div  >
            <div className='UsersList'>
              {names.map(users =>(
                     <section key={users.id} className="user-card">
                     <h3>{users}</h3>
                    
                </section>))
              }
                
            </div>
        </div>
    );
  
}

export default GetUsers