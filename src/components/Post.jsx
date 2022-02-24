import React, { useEffect, useState } from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import moment from 'moment'
import '../style/Post.css'
import { db } from '../components/firebase'; 
import { collection, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";

const Post = ({ id, profilePic, message, timeStamp, username, image, like}) => {
    
  const [ likeMore, setLikeMore ] = useState(like)
  const [ post, setPost ] = useState([])

 const updateLike = async (likeMore) => {
   
  if(likeMore >= 1){
    setLikeMore(1)
  } else{
    setLikeMore(likeMore + 1)
  }
  console.log(1)

  const updatePost = async (post) => {
    console.log('like')
};updatePost(post)};

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
             <div className='like' onClick={() => updateLike(likeMore)}>   <ThumbUpIcon /> {likeMore}</div>  
            </section>
        
    </section>
  )
}
export default Post

