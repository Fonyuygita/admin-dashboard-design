import React from 'react'
import "./Sidebar.scss"
const Sidebar = () => {
  return (
    <div className='sidebar'>
    <div className="top">
    <span className="logo">GitAdmin<a>X</a></span>
    </div>
    <hr/>

    <div className="center">
    <ul>
    
    <li><span>Dashboard</span></li>
    <li><span>Dashboard</span></li>
    <li><span>Dashboard</span></li>
    <li><span>Dashboard</span></li>
    <li><span>Dashboard</span></li>
    <li><span>Dashboard</span></li>

    </ul>
    <div className="bottom">Color option</div>
    </div>
    </div>
  )
}

export default Sidebar