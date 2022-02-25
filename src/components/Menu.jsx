import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import HomeIcon from '@material-ui/icons/Home';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';

const Menu = () => {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (<div className='meny'>
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<PlayCircleFilledIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<PeopleIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<ChatIcon/>}
      />
    </BottomNavigation>
    </div>
  );
}

export default Menu