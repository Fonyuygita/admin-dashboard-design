import React from 'react'
import Sidebar from '../../component/sidebar/Sidebar'
import "./Home.scss"

const Home = () => {
  return (

    <div className='home'>
    <Sidebar/>
    <div className="homeContainer">Home container</div>
    </div>
  )
}

export default Home