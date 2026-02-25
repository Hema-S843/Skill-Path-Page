import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboardWrapper">
      <Sidebar />
      <div className="pageContent">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;