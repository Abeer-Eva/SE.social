import React from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import '../style/Post.css'

const Post = ({ anv, profilePic, message, timestamp, username, image, like}) => {
    //timestamp importeras inte korrekt här
    const handleClick= async (like) =>{
        await (like++)
    
    }
  return (
    <section className='post'>
       
    
            <section className='post_topinfo'>
                <img  className='prof' src={profilePic}/>
                <h3 className='userName'>{username}</h3>
                <p className='timestamp'>{timestamp}</p>
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