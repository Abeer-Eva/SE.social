import React from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import '../style/Post.css'

const Post = ({image, username, timestop, message}) => {
  return (
    <section className='post'>
        <section className='post_top'>
            <p className='post_avatar'>profilbild här?</p>
            <section className='post_topinfo'>
                <h3>{username}</h3>
                <p>Timestamp här</p>
            </section>
        </section>

        <section className='post_bottom'>
            <p>meddelande</p>
            <p>{message}</p>
        </section>

        <section className='post_image'>
            <p>bild här</p>
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