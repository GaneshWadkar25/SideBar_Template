import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './components/SideBar'

function Layout() {
  return (
    <div>
        <SideBar />
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default Layout