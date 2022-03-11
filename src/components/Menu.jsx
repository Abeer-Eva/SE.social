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
import PostPage from './PostPage';
const Menu = () => {
  const pathname = window.location.pathname
  const [value, setValue] = React.useState('pathname');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
  
  <div className='meny'>
    <BottomNavigation sx={{ bottom: 0, left: 0, right: 0,
    padding: "2% 5% 2% 5%", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center",
    "& .MuiBottomNavigation-root .css-go9372-MuiBottomNavigation-root, svg": {
      color: "black",
      width: '1em'
    }

    }} value={value} onChange={handleChange}>
      <Link to="/">
        <BottomNavigationAction
          sx={{margin: "unset", padding: "unset", }}
          label="Home"
          value="home"
          icon={<HomeOutlinedIcon onClick={()=> PostPage()} />}
        />
      </Link>
      <BottomNavigationAction
        sx={{margin: "unset", padding: "unset"}}
        label="Videos"
        value="Videos"
        icon={<PlayCircleOutlineOutlinedIcon />}
      />
      <Link to="getusers">
        <BottomNavigationAction 
          sx={{margin: "unset", padding: "unset"}}
          label="Contacts"
          value="Contacts"
          icon={<PersonOutlineOutlinedIcon />}
        />
      </Link>
      <Link to="chat">
        <BottomNavigationAction onClick={()=> DirectChatPage()}
          sx={{margin: "unset", padding: "unset"}}
          label="Chat"
          value="Chat"
          icon={<ForumOutlinedIcon />}
        />
      </Link>
      <BottomNavigationAction
        sx={{margin: "unset", padding: "unset"}}
        label="Notifications"
        value="Notifications"
        icon={<NotificationsNoneOutlinedIcon/>}
      />
    </BottomNavigation>
  </div>
  );
}

export default Menu