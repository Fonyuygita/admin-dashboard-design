
import React from 'react'
import Chart from '../../component/chart/Chart'
import Feature from '../../component/feature/Feature'
import Navbar from '../../component/navbar/Navbar'
import Sidebar from '../../component/sidebar/Sidebar'
import Widget from '../../component/widgets/Widget'
import List from '../../component/table/List'



import "./Home.scss"


const Home = () => {
  return (

    <div className='home'>
    <Sidebar/>
    <div className="homeContainer">
    <Navbar/>
<div className="widgets">
<Widget type="user"/>
<Widget type="order"/>
<Widget type="earnings"/>
<Widget type="balance"/>



</div>

<div className="charts">

<Feature/>
<Chart aspect={2/1} title={"Last 6 months revenue"}/>

</div>

<div className="listContainer">

<div className="listTitle">Latest Transactions</div>
<List/>

</div>


    </div>
    </div>
  )
}

export default Home