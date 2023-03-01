import React from "react";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";
import "./Single.scss";
import Chart from "../../component/chart/Chart"
import List from "../../component/table/List"

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
        
<div className="left">
<div className="editButton">Edit</div>
<h1 className="title">My Information</h1>
<div className="item">
<img src="https://www.freecodecamp.org/news/content/images/2022/06/hrishikesh.jpg" alt="" className="item" />
<div className="details">
<h1 className="detailTitle">Fonyuy Jean Paul</h1>
<div className="detailI">
<span className="itemKey">Email</span>
<span className="itemValue">Jp@gmai.com</span>

</div>

<div className="detailI">
<span className="itemKey">Phone</span>
<span className="itemValue">(+237 672 792 563)</span>

</div>


<div className="detailI">
<span className="itemKey">Country</span>
<span className="itemValue">Cameroon</span>

</div>

</div>

</div>
</div>


<div className="right">

<Chart aspect={3/1} title={"user spending in last 6 months"}/>
</div>

        </div>
        <div className="bottom">
      <h1 className="title">Users Statistics</h1>
        <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;
