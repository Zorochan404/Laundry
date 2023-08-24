import React from 'react'
import Sidebar from './Components/SideBar Section/Sidebar'
import Body from '../Dashboard/Components/Body Section/Body.jsx'




const Dashboard = () => {
  return (
    <div className="dashboard flex">
      <div className="dashboardContainer flex">
        <Sidebar/>
        <Body/>
      </div>
    </div>
  )
}

export default Dashboard