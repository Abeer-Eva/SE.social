import { LoginOutlined, SmileFilled } from '@ant-design/icons'
import { signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { 
    ChatEngine, 
    ChatList, ChatCard, NewChatForm,
    ChatFeed, ChatHeader, IceBreaker, MessageBubble, IsTyping, ConnectionBar, NewMessageForm,
    ChatSettings, ChatSettingsTop, PeopleSettings, PhotosSettings, OptionsSettings,getOrCreateChat
} from 'react-chat-engine'
import axios from 'axios'
import { AuthProvider } from '../context/AuthContext'
import '../style/chat.css'

const DirectChatPage = () => {
	const [username, setUsername] = useState('')
	
	// function createDirectChat(creds) {
	// 	getOrCreateChat(
	// 		creds,
	// 		{ is_direct_chat: true, usernames: [username] },
	// 		() => setUsername('')
	// 	)
	// }
    
	// function getOrCreateUser(callback) {
    //     axios.put(
    //         'https://api.chatengine.io/users/',
    //         {username: [username]},

    //         {headers: {"Private-Key": process.env.projectID}}
    //     )
    //     .then(r => callback(r.data))
    //     .catch(e => console.log('Get or create user error', e))

	// 	}
	// function renderChatForm(creds) {
	// 	return (
	// 		<div>
			
	// 		</div>
	// 	)
	// }


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
		userSecret='1993Holly'
		projectID='b29c0382-07ab-44d3-a3e1-86606070fac5'
		// userName= {[username]}
		renderChatList={(chatAppState) => <ChatList {...chatAppState} />}
		renderChatCard={(chat, index) => <ChatCard key={`${index}`} chat={chat} />}
		renderNewChatForm={(creds) => <NewChatForm creds={creds} />} 
		renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />}
		renderChatHeader={(chat) => <ChatHeader />}
		renderIceBreaker={(chat) => <IceBreaker />}
		renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => <MessageBubble lastMessage={lastMessage} message={message} nextMessage={nextMessage} chat={chat} />}
		renderIsTyping={(typers) => <IsTyping />}
		renderConnectionBar={(chat) => <ConnectionBar />}
		renderNewMessageForm={(creds, chatID) => <NewMessageForm />}
		renderChatSettings={(chatAppState) => <ChatSettings {...chatAppState} />}
		renderChatSettingsTop={(creds, chat) => <ChatSettingsTop />}
		renderPeopleSettings={(creds, chat) => <PeopleSettings />}
		renderPhotosSettings={(chat) => <PhotosSettings />}
		renderOptionsSettings={(creds, chat) => <OptionsSettings />}
        />
		</div>
      )

}
export default DirectChatPage;