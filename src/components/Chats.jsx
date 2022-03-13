import { LoginOutlined, PropertySafetyFilled, SmileFilled } from '@ant-design/icons'
import { signOut } from 'firebase/auth'
import React, { useContext, useEffect, useState } from 'react'
import {
    ChatEngine,
    ChatList, ChatCard, NewChatForm,
    ChatFeed, ChatHeader, IceBreaker, MessageBubble, IsTyping, ConnectionBar, NewMessageForm,
    ChatSettings, ChatSettingsTop, PeopleSettings, PhotosSettings, OptionsSettings,getOrCreateChat
} from 'react-chat-engine'
import axios from 'axios'
import { doc, getDoc } from "firebase/firestore";
import { useStateValue } from "./stateProvider";
import {db } from "./firebase"
import GetUsers from './getUser'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const DirectChatPage =  () => {
const history=useNavigate();
const {user} =useAuth();
const[loading, setLoading]=useState(false);

const getFile=async(url)=>{
	const response = await fetch (url);
    const data =await response.blob();
	return new File([data],"userPhoto.jpg",{type:'image/jpeg'})
}

useEffect(()=> {

axios.get('https://api.chatengine.io/users/me/',{
	headers:{"project-id":"b29c0382-07ab-44d3-a3e1-86606070fac5",
	 "user-name":user.email,
	 "user-secret":user.uid
} 
})
.then(()=>{
	setLoading(true);
})
.catch(()=>{
	let formData = new FormData();
	formData.append('email',user.email);
	formData.append('username', user.email);
	formData.append('secret', user.uid);

	getFile(user.photoURL)
	.then((avatar)=>{
		formData.append('avatar',avatar,avatar.name);
		axios.post('https://api.chatengine.io/users',formData, {headers:{"private-key":"b8a9c5dd-f0b2-4439-92f9-28214366085d"}})
		.then(()=> setLoading(false))
		.catch((error)=>console.log(error))
	})
})
},[user,history])

	if(!user||loading ) return 'Loading ....'

return(

    <div  className = "chats-page">
    <div  className = "nav-bar">
         <div className= "logo-tab">
               <SmileFilled/>  SE.social
          </div>
          <div onClick={signOut} className="logout-tab">
              <LoginOutlined/> Logout
           </div>
      </div>
        <ChatEngine
	    userName={user.email}
		userSecret={user.uid}
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
export default DirectChatPage