import React from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import {auth} from '../components/firebase'
import '../style/Post.css'

const Post = ({ anv, profilePic, message, timestamp, username, image, like}) => {
    //timestamp importeras inte korrekt här
    
const Post = ({ anv, message, timeStamp, username, image}) => {
  
  const handleClick= async (like) =>{
          await (like++)

      }
  
    //timestamp importeras inte korrekt här
    const time = new Date(timeStamp*1000)
    const timeS = time.toString()
<<<<<<< HEAD
=======
    console.log(time)
  
>>>>>>> 33b0a35c40d2b3a9590a98bd42d8bbd02625d933
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
             <div className='like' onClick={handleClick}>   <ThumbUpIcon /> {like}</div>  
            </section>
        

    </section>
  )
}
export default Post