import React from 'react'

import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return <>
  
    <div className="">
      {/* <Sidebar  /> */}
      <Outlet />
    </div>

    <Footer />

  </>
}
