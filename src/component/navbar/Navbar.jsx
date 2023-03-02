import React, { useContext } from 'react'
import "./Navbar.scss"

// mui icons
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { DarkModeContext } from '../../context/darkMode';

const Navbar = () => {
  const {darkMode, toggle}=useContext(DarkModeContext);
  return (
    <div className='navbar'>
    <div className="wrapper">
    <div className="search">
    <input type="text" placeholder='search....' />
<SearchIcon/>
    </div>
<div className="items">
<div className="item">
< LanguageIcon  className='icon'/>
Spanish
</div>

<div className="item">
<DarkModeIcon className='icon' onClick={toggle}/>

</div>


<div className="item">
<NotificationsNoneIcon className='icon' />
<div className="counter">1</div>
</div>

<div className="item">
<ChatBubbleOutlineIcon className='icon'/>
<div className="counter">2</div>

</div>


<div className="item">
<FormatListBulletedIcon className='icon' />

</div>



<div className="item">
<img src="https://www.freecodecamp.org/news/content/images/2022/06/hrishikesh.jpg" alt="" className="avatar" />
</div>


</div>

    </div>
    
    </div>
  )
}

export default Navbar