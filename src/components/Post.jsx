import React from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import {auth} from '../components/firebase'
import '../style/Post.css'

const Post = ({ anv, message, timestamp, username, image}) => {

    //timestamp importeras inte korrekt här

  return (
    <section className='post'>
       
    
            <section className='post_topinfo'>
                <h3 className='userName'>{username}</h3>
                <p className='timestamp'>time</p>
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