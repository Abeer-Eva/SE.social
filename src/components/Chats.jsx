import { LoginOutlined, SmileFilled } from '@ant-design/icons'
import { signOut } from 'firebase/auth'
import React, { useContext, useEffect, useState } from 'react'
import { 
    ChatEngine, 
    ChatList, ChatCard, NewChatForm,
    ChatFeed, ChatHeader, IceBreaker, MessageBubble, IsTyping, ConnectionBar, NewMessageForm,
    ChatSettings, ChatSettingsTop, PeopleSettings, PhotosSettings, OptionsSettings,getOrCreateChat
} from 'react-chat-engine'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import { StateContext } from './stateProvider'
import { AuthProvider } from '../context/AuthContext'
import '../style/chat.css'
import SignOut from './SignOut'


const DirectChatPage = (name) => {
	const [username, setUsername] = useState('')
	const [user, setUser]= useState('')
	// const history = useNavigate();

    // useEffect(() => {
       
	// 	//hämta users uppgift
        axios.get('https://api.chatengine.io/users/me/', {
           headers: {
           'Project-ID': 'b29c0382-07ab-44d3-a3e1-86606070fac5',
                 'User-Name': user.email,
                'User-Secret': user.uid
          }
        })
            
           

		
 
return(

    <div  className = "chats-page">
    <div  className = "nav-bar">
		<section className= "logout-tab">
              <SignOut />
           </section>
      </div>
        <ChatEngine
		userName='Sarah'
		userSecret='1993Holly'
		projectID='b29c0382-07ab-44d3-a3e1-86606070fac5'
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