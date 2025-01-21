import React from 'react'
import EventTable from './components/event-table'

const AdminPage = () => {
  return (
    <div className='bg-black pt-24'>
      <div className='max-w-6xl mx-auto px-4'>
        <h1 className='text-white text-3xl font-bold text-center'>Admin Dashboard</h1>
        <EventTable />
      </div>
     
    </div>
  )
}

export default AdminPage