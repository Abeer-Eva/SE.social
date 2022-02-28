import * as React from 'react';
import GetUser from './GetUser'
import {Link} from 'react-router-dom'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';

const Menu = () => {
  const [value, setValue] = React.useState('recents');

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
      <BottomNavigationAction
        label="Contacts"
        value="Contacts"
        icon={<PersonOutlineOutlinedIcon />}
        onClick={() => <Link to={{pathname: 'getuser'}}></Link>}
      />
      <BottomNavigationAction
        label="Chat"
        value="Chat"
        icon={<ForumOutlinedIcon />}
      />
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