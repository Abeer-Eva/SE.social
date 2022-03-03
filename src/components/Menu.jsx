import * as React from 'react';
import {Link} from 'react-router-dom'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import GetUsers from './getUser';
import DirectChatPage from './Chats'
const Menu = () => {
  const pathname = window.location.pathname
  const [value, setValue] = React.useState('pathname');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (<div className='meny'>
    <BottomNavigation sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<HomeOutlinedIcon />}
      />
      <BottomNavigationAction
        label="Videos"
        value="Videos"
        icon={<PlayCircleOutlineOutlinedIcon />}
      />
      <Link to="getusers">
      <BottomNavigationAction 
        label="Contacts"
        value="Contacts"
        icon={<PersonOutlineOutlinedIcon />}
     
      /></Link>
      <Link to="chat">
      <BottomNavigationAction onClick={()=> DirectChatPage()}
        label="Chat"
        value="Chat"
        icon={<ForumOutlinedIcon />}
     
      /></Link>
      <BottomNavigationAction
        label="Notifications"
        value="Notifications"
        icon={<NotificationsNoneOutlinedIcon/>}
      />
    </BottomNavigation>
    </div>
  );
}

export default Menu