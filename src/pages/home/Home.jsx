import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Sidebar from '../../component/sidebar/Sidebar'
import Widget from '../../component/widgets/Widget'
import "./Home.scss"


const Home = () => {
  return (

    <div className='home'>
    <Sidebar/>
    <div className="homeContainer">
    <Navbar/>
<div className="widgets">
<Widget/>
<Widget/>
<Widget/>
<Widget/>
<Widget/>


</div>

    </div>
    </div>
  )
}

export default Home