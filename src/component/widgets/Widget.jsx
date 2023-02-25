import React from "react";

import "./Widget.scss";

// mui icons
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Widget = ({type}) => {

    // domy data

    const amount=300;
    const percentage=20;
let  data;
    // use switch- case to print our data

    switch(type){
case "user":
    data={
        title:"USERS",
        isMoney:false,
        link:"see all users",
        icon:(<EngineeringIcon  className="icon"/>)
    };
    break;

    case "order":
    data={
        title:"ORDERS",
        isMoney:false,
        link:"see all orders",
        icon:(<ProductionQuantityLimitsIcon   className="icon"/>)
    };
    break;

    case "earnings":
        data={
            title:"EARNINGS",
            isMoney:true,
            link:"view net earnings",
            icon:(<AttachMoneyIcon className="icon"/>)
        };
        break;

        case "balance":
            data={
                title:"BALANCE",
                isMoney:true,
                link:"aee details",
                icon:(<AccountBalanceIcon className="icon"/>)
            };
            break;


    default:
        break;





    }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"} {amount}</span>
        <div className="link">{data.link}</div>
      </div>
      <div className="right">
        <div className="percentage red">
         <ExpandLessIcon/>
          {percentage}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
