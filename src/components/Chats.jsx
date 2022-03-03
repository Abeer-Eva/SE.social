import { LoginOutlined, SmileFilled } from '@ant-design/icons'
import { signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { 
    ChatEngine, 
    ChatList, ChatCard, NewChatForm,
    ChatFeed, ChatHeader, IceBreaker, MessageBubble, IsTyping, ConnectionBar, NewMessageForm,
    ChatSettings, ChatSettingsTop, PeopleSettings, PhotosSettings, OptionsSettings,getOrCreateChat
} from 'react-chat-engine'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const DirectChatPage = () => {
	
	const history = useNavigate();

    useEffect(() => {
       
		//hämta users uppgift
        axios.get('https://api.chatengine.io/users/me/', {
            headers: {
                'Project-ID': 'b29c0382-07ab-44d3-a3e1-86606070fac5',
                'User-Name': user.email,
                'User-Secret': user.uid
            }
        })
            .then(() => {
                setLoading(false)
            })
            .catch(() => {

                const formData = new FormData()
                formData.append('email', user.email);
                formData.append('username', user.email);
                formData.append('secret', user.uid);
                getFiles(user.photoURL)
                    .then((avatar) => {
                        formData.append('avatar', avatar, avatar.name)
                        console.log(formData);
                        axios.post('https://api.chatengine.io/users/',
                            formData,
                            { headers: { "private-key":'b29c0382-07ab-44d3-a3e1-86606070fac5'} }
                        )
                            .then(() => {
                                setLoading(false)
                            })
                            .catch((error) => {
                                console.log(error);
                            })
                    })
            })
    }, [user, history])
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
export default DirectChatPage;