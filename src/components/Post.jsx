import React from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import '../style/Post.css'

const Post = ({ anv, message, timeStamp, username, image}) => {

    //timestamp importeras inte korrekt här
    const time = new Date(timeStamp*1000)
    const timeS = time.toString()
  return (
    <section className='post'>
       
    
            <section className='post_topinfo'>
                <h3 className='userName'>{username}</h3>
                <p className='timestamp'>{timeS}</p>
            </section>
        

        <section className='post_bottom'>
            <p className='message'>{message}</p>
            <img src={image} alt="" className='post_image'/>
        </section>

            <section className='post-option'>
                <ThumbUpIcon />
            </section>
        

    </section>
  )
}
export default Post