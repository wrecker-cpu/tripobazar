import React from 'react'
import SideNav from './SideNav'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
  } from "react-router-dom";
import Users from './Users';
import DestinationDetails from './DestinationDetails';
function AdminPannel() {
  return (
    <div className="flex h-96 bg-[#F8F8F8]">
    <SideNav />
    <div className="flex-1 ml-64 p-6"> {/* Ensures content is not hidden behind the side nav */}
      <Routes>
        <Route path="users" element={<Users />} />
        <Route path="destination-details" element={<DestinationDetails />} />
      </Routes>
    </div>
  </div>
  )
}

export default AdminPannel