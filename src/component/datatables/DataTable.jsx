import React from 'react'

import "./DataTable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../dataTableSource';
import { Link } from 'react-router-dom';
// making use of our material ui here 


const DataTable = () => {
//this column we are suppose to use it everywhere in our app

// so we define it as follows

const actionColumn=[
    {field:"action", headerName:"Action", width:200, renderCell:()=>{
        return(
            <div className="cellAction">
            <Link to="/users/test" style={{textDecoration:"none"}}>
            <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>

            </div>
        )
    }}
]

  return (
    <div className='dataTable'>

    <div className="dataTableTitle">
    Add New User
    <Link to="/users/new" style={{textDecoration:"none"}} className='linkTo'>Add New</Link>
    </div>
      <DataGrid
      className='datagrid'
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable