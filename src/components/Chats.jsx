import { LoginOutlined, SmileFilled } from '@ant-design/icons'
import { signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { ChatEngine, getOrCreateChat } from 'react-chat-engine'
import {auth} from '../components/firebase'



const DirectChatPage = () => {
	const [username, setUsername] = useState('')

	function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [username] },
			() => setUsername('')
		)
	}

	function renderChatForm(creds) {
		return (
			<div>
				<input 
					placeholder='Username' 
					value={username} 
					onChange={(e) => setUsername(e.target.value)} 
				/>
				<button onClick={() => createDirectChat(creds)}>
					Create
				</button>
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
        userName='Sarah'
		userSecret='1234'
		projectID='b29c0382-07ab-44d3-a3e1-86606070fac5'
          renderNewChatForm={(creds) => renderChatForm(creds)}
        />
		</div>
      )

}
export default DirectChatPage;