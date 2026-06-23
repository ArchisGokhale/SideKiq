import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
const Opportunities = React.lazy(()=>import('../pages/Opportunities'))
const TaskDetails = React.lazy(()=>import('../pages/TaskDetails'))
const Workspace = React.lazy(()=>import('../pages/Workspace'))
const ActiveTasks = React.lazy(()=>import('../pages/ActiveTasks'))
const Messages = React.lazy(()=>import('../pages/Messages'))
const Earnings = React.lazy(()=>import('../pages/Earnings'))
const Profile = React.lazy(()=>import('../pages/Profile'))
const Settings = React.lazy(()=>import('../pages/Settings'))

function DashboardHome() {
  return (
    <div style={{padding:20}}>
      <h2>Dashboard</h2>
      <p>Welcome — this is the Dashboard shell. Use this as a pattern for other pages.</p>
    </div>
  )
}

export default function DashboardLayout(){
  return (
    <div className="dash-root">
      <Sidebar />
      <div className="dash-main">
        <Topbar />
        <div className="dash-content">
          <Routes>
            <Route path="/" element={<DashboardHome/>} />
            <Route path="opportunities" element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Opportunities />
              </React.Suspense>
            } />
            <Route path="opportunity/:id" element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <TaskDetails />
              </React.Suspense>
            } />
            <Route path="workspace" element={<React.Suspense fallback={<div>Loading...</div>}><Workspace/></React.Suspense>} />
            <Route path="active" element={<React.Suspense fallback={<div>Loading...</div>}><ActiveTasks/></React.Suspense>} />
            <Route path="messages" element={<React.Suspense fallback={<div>Loading...</div>}><Messages/></React.Suspense>} />
            <Route path="earnings" element={<React.Suspense fallback={<div>Loading...</div>}><Earnings/></React.Suspense>} />
            <Route path="profile" element={<React.Suspense fallback={<div>Loading...</div>}><Profile/></React.Suspense>} />
            <Route path="settings" element={<React.Suspense fallback={<div>Loading...</div>}><Settings/></React.Suspense>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
