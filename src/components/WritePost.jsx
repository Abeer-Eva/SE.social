import React, { useState } from 'react'
import '../style/WritePosts.css'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { useStateValue } from "./stateProvider";
import {db} from './firebase';
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore';

const WritePost = () =>{

    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [like, setLike]= useState(0)

    const handleSubmit = async (e) =>{
        e.preventDefault(); 

        const docRef = await addDoc(collection(db, "postData"), { //nytt post med data från användaren
            id: '',
            message: input, 
            timeStamp: serverTimestamp(),
            profilePic: user.photoURL,
            userName: user.displayName,
            image: imageUrl,
            like:like
        })
        setInput('')
        setImageUrl('')
        console.log(docRef.id)
        

       const updatePost = async (post) => { 
            const postRef = doc(db, "postData", post.id); //hämtar dokument via id från databasen
            await updateDoc(postRef, {  //updaterar id raden i dokumentet
                id: post.id
            });
        };
        updatePost(docRef)
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
                    placeholder='image URL (optional)' className='messagesender__inputimg'  />
                </form>

                <button className='sendBtn' onClick={handleSubmit}  type='submit'>Send</button>
            </article>
           
        </section>
    )
}

export default WritePost 