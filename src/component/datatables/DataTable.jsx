import React from 'react'

import "./DataTable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../dataTableSource';
// making use of our material ui here 


const DataTable = () => {
//this column we are suppose to use it everywhere in our app

// so we define it as follows

const actionColumn=[
    {field:"action", headerName:"Action", width:200, renderCell:()=>{
        return(
            <div className="cellAction">
            <div className="viewButton">View</div>
            <div className="deleteButton">Delete</div>

            </div>
        )
    }}
]

  return (
    <div className='dataTable'>
      <DataGrid
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