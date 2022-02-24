import React from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import moment from 'moment'
import '../style/Post.css'
import { db } from '../components/firebase'; 
import { doc, setDoc, updateDoc } from "firebase/firestore";

const Post = ({ anv, profilePic, message, timeStamp, username, image, like}) => {
    

 const updateLike = async (post) => {
   console.log('1');
   const likeRef= doc(db, "postData", post.anv);
   console.log('2');
   await setDoc(likeRef, post.anv)
   console.log('3');
  await updateDoc(likeRef, {
      like:like+1
  });
  console.log(post.anv);
}

    const timeStampDate = timeStamp 
    const dateInMills = timeStampDate * 1000
    const day = new Date(dateInMills).toDateString()

    let date = moment(day).format('ddd, MMM Do, hA')

  return (
    <section className='post'>
       
            <section className='post_topinfo'>

            <img alt='profile pic' className='prof' src={profilePic}/>
            <article className='info' >
                <h3 className='userName'>{username}</h3>
                <p className='timestamp'>{date}</p>
                </article>
            </section>
        
        <section className='post_bottom'>
            <p className='message'>{message}</p>
            <img src={image} alt="" className='post_image'/>
             <div className='like' onClick={updateLike}>   <ThumbUpIcon /> {like}</div>  
            </section>
        
    </section>
  )
}
export default Post

