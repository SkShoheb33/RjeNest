import React from 'react'
import DataTable from 'react-data-table-component'
function StudentLogs() {
  const columns = [
    {name:'Ip Address',selector:row=>row.ip ,sortable:true},
    {name:'Visited time',selector:row=>row.vtime ,sortable:true},
    {name:'Exit time',selector:row=>row.etime ,sortable:true},
  ]
  const data = [
    {id:1,ip:"10.1.1.212",vtime:"10:11:29 am",etime:"12:00:10 pm"},
    {id:2,ip:"10.1.1.214",vtime:"10:11:29 am",etime:"12:00:11 pm"},
    {id:3,ip:"10.1.1.218",vtime:"10:11:29 am",etime:"12:00:13 pm"}
  ]
  return (
    <div>
      <DataTable
      columns={columns}
      data={data}>
      </DataTable>
    </div>
  )
}

export default StudentLogs