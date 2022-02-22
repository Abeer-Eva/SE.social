import React from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import moment from 'moment'
import '../style/Post.css'

const Post = ({ anv, profilePic, message, timeStamp, username, image, like}) => {
    
  const handleClick= async (like) =>{
      await (like++)
    }

    const timeStampDate = timeStamp 
    const dateInMills = timeStampDate * 1000
    const day = new Date(dateInMills).toDateString()

    let date = moment(day).format('ddd, MMM Do, hA')

  return (
    <section className='post'>
       
            <section className='post_topinfo'>
            <img alt='profile pic' className='prof' src={profilePic}/>
                <h3 className='userName'>{username}</h3>
                <p className='timestamp'>{date}</p>
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