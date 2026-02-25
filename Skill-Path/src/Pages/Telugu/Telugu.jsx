import React from "react";
import Sidebar from "../Components/Sidebar";
import "./Telugu.css";

function Telugu() 
{
  return (
    <>
      {/* 🔵 Top Navbar */}
      <Sidebar />

      {/* Page Content */}
      <div className="pageContent">
        <h2>Telugu Practice</h2>
        <p>
          This is the Telugu page. You can add grammar, vocabulary,
          comprehension questions here.
        </p>
      </div>
    </>
  );
}

export default Telugu;