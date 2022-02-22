import React from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import {auth} from '../components/firebase'
import '../style/Post.css'
import { doc, updateDoc } from "firebase/firestore";
import {db} from '../components/firebase'

const Post = ({ anv, profilePic, message, timestamp, username, image, like}) => {
    //timestamp importeras inte korrekt här
    
   const updateLike = async (post) => {
      const likeRef = doc(db, "postData", anv);
      await updateDoc(likeRef, {
          like: like+1
      });
  };
  updateLike(like);
  
    //timestamp importeras inte korrekt här
    const time = new Date(timestamp*1000)
    const timeS = time.toString()
    console.log(time)
  
  return (
    <section className='post'>
       
    
            <section className='post_topinfo'>
                <img  className='prof' src={profilePic}/>
                <h3 className='userName'>{username}</h3>
                <p className='timestamp'>{timeS}</p>
            </section>
        

        <section className='post_bottom'>
            <p className='message'>{message}</p>
            <img src={image} alt="" className='post_image'/>
             <div className='like' onClick={updateLike(like)}>   <ThumbUpIcon /> {like}</div>  
            </section>
        

    </section>
  )
}

export default Post