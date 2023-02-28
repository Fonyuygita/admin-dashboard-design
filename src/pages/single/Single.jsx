import React from "react";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";
import "./Single.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
        
<div className="left">
<h1 className="title">My Information</h1>
<div className="item">
<img src="https://www.freecodecamp.org/news/content/images/2022/06/hrishikesh.jpg" alt="" className="item" />
</div>
</div>


<div className="right"></div>

        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default Single;
