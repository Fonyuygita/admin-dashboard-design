import React from "react";
import "./Feature.scss";
// mui icons

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// import circular progress bar

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// mui icons

import MoreVertIcon from "@mui/icons-material/MoreVert";

const Feature = () => {
  return (
    <div className="feature">
      <div className="top">
        <h1>Total Revenue</h1>
        <MoreVertIcon className="icon" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={4} />
        </div>
        <p className="title">Total Sales made today</p>
        <div className="amount">$134</div>
        <p className="desc">
          Previous transaction processing. Last payment may not be included{" "}
        </p>
        <div className="summary">
        <div className="item">
        <div className="itemTitle">Target</div>
        <div className="itemResult positive">
        <KeyboardArrowUpIcon className="icon"/>
        <div className="resultAmount">$135.6k</div>
     
        </div>
        </div>

        <div className="item">
        <div className="itemTitle">Last Week</div>
        <div className="itemResult negative">
        <KeyboardArrowDownIcon className="icon"/>
        <div className="resultAmount">$13.6k</div>
     
       </div>
        </div>


        <div className="item">
        <div className="itemTitle">Last Month</div>
        <div className="itemResult positive">
        <KeyboardArrowUpIcon className="icon"/>
        <div className="resultAmount">$57.6k</div>
     
        </div>
        </div>

        <div className="item">
        <div className="itemTitle negative">Last Year</div>
        <div className="itemResult">
        <KeyboardArrowDownIcon className="icon"/>
        <div className="resultAmount">$13.6k</div>
     
       </div>
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default Feature;
