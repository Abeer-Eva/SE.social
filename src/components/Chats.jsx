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
import {  useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import SignOut from './SignOut'
import '../style/chat.css'

const DirectChatPage =  () => {
const history=useNavigate();
const {user, chats} =useAuth();
const[loading, setLoading]=useState(false);




const [hasSetLink, setLink] = useState(false)

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
	formData.append('username', user.displayName);
	formData.append('secret', user.uid);

	getFile(user.photoURL)
	.then((avatar)=>{
		formData.append('avatar',avatar,avatar.name);
		axios.post('https://api.chatengine.io/users',formData, {headers:{"private-key":"b8a9c5dd-f0b2-4439-92f9-28214366085d"}})
		.then(()=> setLoading(false))
		.catch((error)=>console.log(error))
	})
})

axios.get('https://api.chatengine.io/chats/',{
	headers:{"project-id":"b29c0382-07ab-44d3-a3e1-86606070fac5",
	 "user-name":user.email,
	 "user-secret":user.uid
} })
},[user,history,chats])
  
	// if(!user||loading ) return 'Loading ....'

return(

    <div  className = "chats-page">
    <div  className = "nav-bar">
		<section className= "logout-tab">
              <SignOut/>
           </section>
      </div>
        <ChatEngine
	    userName={user.email}
		userSecret={user.uid}
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
export default DirectChatPage