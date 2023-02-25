import React from 'react'
import "./Sidebar.scss"
// our icons goes here

import DashboardIcon from '@mui/icons-material/Dashboard';
import EditNotificationsIcon from '@mui/icons-material/EditNotifications';
import SystemSecurityUpdateGoodIcon from '@mui/icons-material/SystemSecurityUpdateGood';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import GroupIcon from '@mui/icons-material/Group';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SyncAlt from '@mui/icons-material/SyncAlt';

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <div className="top">
    <span className="logo">GitAdmin<a>X</a></span>
    </div>
    <hr/>

    <div className="center">
    <ul>
    
    <li>
    <DashboardIcon/>
    <span>Dashboard</span></li>
    <li>
    <GroupIcon/>
    <span>Users</span>
    </li>
    <li>
    <ProductionQuantityLimitsIcon/>
    <span>Product</span>
    </li>
    <li>
    <BookmarkBorderIcon/>
    <span>Order</span>
    </li>
    <li>
    <LocalShippingIcon/> 
    <span>Delivery</span>
    </li>
    <li>
    <QueryStatsIcon/> 
    <span>Stats</span>
    </li>
    <li>
    <EditNotificationsIcon/>
    <span>Notification</span>
    </li>
    <li>
< SystemSecurityUpdateGoodIcon />
    <span>System health</span>
    
    </li>
    <li>
 <SyncAltIcon/>
    <span>Logs</span>
    </li>
    <li>
    <SettingsApplicationsIcon/>
    <span>Settings</span>
    </li>
    <li>
    <AccountBoxIcon/>
    <span>Profile</span>
    </li>
    <li>
    <LogoutIcon/>   
     <span>Logout</span>
    </li>
    

    </ul>
    <div className="bottom">Color option</div>
    </div>
    </div>
  )
}

export default Sidebar