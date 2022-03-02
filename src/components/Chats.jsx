import { LoginOutlined, SmileFilled } from '@ant-design/icons'
import { signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { ChatEngine, getOrCreateChat } from 'react-chat-engine'
import axios from 'axios'
import { AuthProvider } from '../context/AuthContext'


const DirectChatPage = () => {
	const [username, setUsername] = useState('')
	
	function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [username] },
			() => setUsername('')
		)
	}
    
	function getOrCreateUser(callback) {
        axios.put(
            'https://api.chatengine.io/users/',
            {username: [username]},
            {headers: {"Private-Key": process.env.projectID}}
        )
        .then(r => callback(r.data))
        .catch(e => console.log('Get or create user error', e))

		}
	function renderChatForm(creds) {
		return (
			<div>
			
			</div>
		)
	}


return(

    <div  className = "chats-page">
    <div  className = "nav-bar">
         <div className= "logo-tab">
               <SmileFilled/>  SE.social
          </div>
          <div onClick={signOut} className= "logout-tab">
              <LoginOutlined/> Logout
           </div>
      </div>
        <ChatEngine
		userSecret=''
		projectID={process.env.projectID}
		userName= {[username]}
        />
		</div>
      )

}
export default DirectChatPage;