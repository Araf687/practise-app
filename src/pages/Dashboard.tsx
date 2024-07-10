import React from 'react'
import EditableTable from '../components/tables/EditableTable'

function Dashboard() {
    const columns= [
        {
          accessorKey: 'id',
          header: 'ID',
        },
        {
          accessorKey: 'name',
          header: 'Name',
        },
        {
          accessorKey: 'salary',
          header: 'Salary',
        },
        {
          accessorKey: 'adjustment',
          header: 'Adjustment',
        },
        {
          accessorKey: 'penalty',
          header: 'Penalty',
        },
        {
          accessorKey: 'total',
          header: 'Total',
        },
      ];
  return (
    <EditableTable columns={columns}/>
  )
}

export default Dashboard