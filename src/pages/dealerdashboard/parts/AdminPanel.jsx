import React from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

const AdminPanel = () => {
  return (
    <div>
        <Nav/>
        <SideBar/>
        <div>{Outlet}</div>
    </div>
  )
}

export default AdminPanel