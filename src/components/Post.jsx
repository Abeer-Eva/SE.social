import React from 'react'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/Share';
import moment from 'moment'
import '../style/Post.css'
import { db } from '../components/firebase'; 
import { doc, updateDoc } from "firebase/firestore";
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';

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
        <CardHeader
        avatar={
          <Avatar src={profilePic} aria-label="recipe">
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
          }
          title={username}
          subheader={date}
          />
        </section>
        <section className='post_bottom'>
        <CardContent>
          <Typography sx={{margin: "0 0 0 2em"}} paragraph  variant="body2" className='message'>{message}</Typography>
          </CardContent>
          <CardMedia
            component="img" src={image} alt="" className='post_image'/>
          <div className='socials'>
            <IconButton  className='like' onClick={() => likeIt()}> <FavoriteBorderOutlinedIcon style={{color: "#3b5998", height: "1em", width: "1em"}}/> {like} </IconButton > 
            <IconButton aria-label="share" style={{color: "#3b5998", height: "1em", width: "1em"}}>
            <ShareIcon />
            </IconButton>
        </div> 
      </section>   
    </section>
  )
}
export default Post

