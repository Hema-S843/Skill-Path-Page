// src/Layout/DashboardLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar"
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboardContainer">
      <Sidebar />  {/* Sidebar component used here */}
      <main className="mainContent">
        {/* Renders the selected page here */}
      </main>
    </div>
  );
}

export default Dashboard;