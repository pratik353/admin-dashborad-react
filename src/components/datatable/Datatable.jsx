import React, { useState } from 'react'
import './datatable.scss'

import { DataGrid } from '@mui/x-data-grid';
import { userColums, userRows } from '../../datatablesource.js';


import { Link } from 'react-router-dom';
const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    console.log(data.filter(item=>item.id !== id))
    setData(data.filter(item=>item.id !== id))
  }
 
    const actionColumn = [
        {field:"action", headerName:"Action", width:200, renderCell:(params)=>{
            return(
                <div className='cellAction'>
                  <Link to=":userId" style={{textDecoration: "none"}}>
                    <div className='viewButton'>View</div>
                  </Link>
                    <div className='deleteButton' onClick={()=>{handleDelete(params.row.id)}}>Delete</div>
                </div>
            )
        }}
    ]

  return (
    <div className='datatable'>
      <div className="datatableTitle">
        Add New User 
        <Link to="new" className="link">
          Add New
        </Link>
      </div>
        <DataGrid
        rows={data}
        columns={userColums.concat(actionColumn)}  /* concat row with existing table */
        pageSize={9}
        rowsPerPageOptions={[9]}
        className='datagrid'
      />
    </div>
  )
}

export default Datatable