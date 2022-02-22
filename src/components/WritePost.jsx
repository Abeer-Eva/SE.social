import React, { useState } from 'react'
import '../style/WritePosts.css'
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { useStateValue } from "./stateProvider";
import {db} from './firebase';
import firebase from 'firebase/compat/app';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const WritePost = () =>{

    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const docRef = await addDoc(collection(db, "postData"), { //nytt post med data från användaren
            message: input, 
            timeStamp: serverTimestamp(),
            profilePic: user.photoURL,
            userName: user.displayName,
            image: imageUrl
        })
        setInput('')
        setImageUrl('')
    }

    const [{user}, dispatch] = useStateValue() //får användardatan här från reducer
    

    return(
        <section className='messagesender'>
            <article className="messagesender__typeBox">
                <form >
                    <input value={input}
                    onChange={(e) => setInput(e.target.value)} 
                    className='messagesender__input'
                    placeholder={`What's on your mind ${user.displayName}?`}/>
                    <input 
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)} 
                    placeholder='image URL (optional)'  />
                </form>
            </article>
            <button onClick={handleSubmit}   className="messagesender__send" type='submit'><SendRoundedIcon/></button>
        </section>
    )
}

export default WritePost