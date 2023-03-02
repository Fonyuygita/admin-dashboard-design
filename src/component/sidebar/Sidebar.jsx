import React from "react";
import "./Sidebar.scss";
// our icons goes here

import DashboardIcon from "@mui/icons-material/Dashboard";
import EditNotificationsIcon from "@mui/icons-material/EditNotifications";
import SystemSecurityUpdateGoodIcon from "@mui/icons-material/SystemSecurityUpdateGood";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import GroupIcon from "@mui/icons-material/Group";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SyncAlt from "@mui/icons-material/SyncAlt";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
      <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">
          GitAdmin<a>X</a>
        </span>
        </Link>
      </div>
      <hr />

      <div className="center">
        <ul>
        <p className="title">MAIN</p>
          <li>
            <DashboardIcon  className="icon"/>
            <span>Dashboard</span>
          </li>
        <p className="title">LIST</p>
        <Link to="/users" style={{textDecoration:"none"}}>
          <li>
            <GroupIcon />
            <span>Users</span>
          </li>
          </Link>

          <Link to="/products" style={{textDecoration:"none"}}>
          <li>
            <ProductionQuantityLimitsIcon className="icon" />
            <span>Product</span>
          </li>
          </Link>
          <li>
            <BookmarkBorderIcon  className="icon "/>
            <span>Order</span>
          </li>
          <li>
            <LocalShippingIcon className="icon " />
            <span>Delivery</span>
          </li>

        <p className="title">USEFUL LINKS</p>

          <li>
            <QueryStatsIcon  className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <EditNotificationsIcon  className="icon"/>
            <span>Notification</span>
          </li>

        <p className="title">SERVICE</p>

          <li>
            <SystemSecurityUpdateGoodIcon  className="icon"/>
            <span>System health</span>
          </li>
          <li>
            <SyncAltIcon />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USERS</p>


          <li>
            <AccountBoxIcon  className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
        <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      


        </div>
      </div>
    </div>
  );
};

export default Sidebar;
