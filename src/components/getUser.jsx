import React, { useState } from 'react';
import 'firebase/app';
import '../style/getUsers.css'
import { auth, db } from "./firebase";
import { useStateValue } from './stateProvider';
import { actionTypes } from './reducer';
import { collection, getDocs } from "firebase/firestore";
import { Chat } from '@material-ui/icons';
import DirectChatPage from './Chats';
import Menu from './Menu'


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
          // create users collection for chats    
//       const CreateUser= (name)=>{

//        db.collection('postData').doc(name.userName).collection('chatList').add({
//        password: this.password,
//        name: this.name
//   }) 

// } 
    return (
        <div  >
            <div className='UsersList'>
                <h1>Användare online</h1>
              {names.map(users =>(
                     <section key={users.id} className="user-card">
                        <h3 onclick={()=>DirectChatPage()}>{users}</h3>
                </section>))
              }
                
            </div>
            <Menu/>
        </div>
    );
  
}

export default GetUsers