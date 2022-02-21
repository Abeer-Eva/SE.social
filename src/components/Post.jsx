import React from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import {auth} from '../components/firebase'
import '../style/Post.css'

const Post = ({ anv, message, timestamp, username, image}) => {

    //timestamp importeras inte korrekt här

  return (
    <section className='post'>
        <div className='post__header'>logo</div>
        <section className='post_top'>
            <section className='post_topinfo'>
                <h3 className='userName'>{username}</h3>
                <p className='timestamp'>time</p>
            </section>
        </section>

        <section className='post_bottom'>
            <p className='message'>{message}</p>
        </section>

        <section className='post_image'>
            <img src={image} alt="" />
        </section>

        <section className='post_options'>
            <section className='post-option'>
                <ThumbUpIcon />
                <p>Like</p>
             </section> 
         </section>  

    </section>
  )
}
export default Post