import React from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ShareIcon from '@material-ui/icons/Share';
import moment from 'moment'
import '../style/Post.css'
import { db } from '../components/firebase'; 
import { doc, updateDoc } from "firebase/firestore";

const Post = ({ key, id, profilePic, message, timeStamp, username, image, like}) => {

const likeIt = async () =>{
    let x
    if( like >= 0){
      x = like + 1
    }
    const postRef = doc(db, "postData", id); //hämtar dokument från databasen med hjälp av id från props. 
    await x && updateDoc(postRef, { //updaterar like
        like: x
    });
    console.log('document updated, ' + id, 'data ' + x)
};


    const timeStampDate = timeStamp 
    const dateInMills = timeStampDate * 1000
    const day = new Date(dateInMills).toDateString()

    let date = moment(day).format('ddd, MMM Do, hA')

  return (
    <section className='post'>
       
            <section className='post_topinfo'>

            <img alt='profile pic' className='prof' src={profilePic}/>
            <article className='info' >
            <span class="font-weight-bold userName">{username}</span>
                <p className='timestamp'>{date}</p>
                </article>
            </section>
        
        <section className='post_bottom'>
            <p className='message'>{message}</p>
            <img src={image} alt="" className='post_image'/>
            <div className='socials'>
                    <div className='like' onClick={() => likeIt()}> <ThumbUpIcon />{like} </div> 
                    <ShareIcon/>
                    </div> 
            </section>
        
    </section>
  )
}
export default Post

