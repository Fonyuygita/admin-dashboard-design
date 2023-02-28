import React from 'react'
import "./List.scss"
import Sidebar from "../../component/sidebar/Sidebar"
import Navbar from "../../component/navbar/Navbar"
import DataTable from '../../component/datatables/DataTable'


const List = () => {
  return (
    <div className="list">
<Sidebar/>

<div className="listContainer">
<Navbar/>
<DataTable/>



</div>

    </div>
  )
}

export default List