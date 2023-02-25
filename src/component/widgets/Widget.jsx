import React from "react";

import "./Widget.scss";

// mui icons
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import EngineeringIcon from "@mui/icons-material/Engineering";

const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">USERS</span>
        <span className="counter">$123</span>
        <div className="link">See all Users</div>
      </div>
      <div className="right">
        <div className="percentage red">
          <ExpandLessIcon />
          20%
        </div>
        <EngineeringIcon className="icon" />
      </div>
    </div>
  );
};

export default Widget;
