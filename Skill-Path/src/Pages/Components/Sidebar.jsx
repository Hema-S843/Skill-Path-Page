import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

import "./Sidebar.css";

function Sidebar({ user: propUser }) 
{
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true); // sidebar open by default
  const [user, setUser] = useState(propUser || null);

  // Check localStorage if propUser is not provided
  useEffect(() => 
  {
    if (!propUser) 
    {
      const storedUser = JSON.parse(localStorage.getItem("user")); // e.g. { name: "Hemapriya" }
      if (storedUser) setUser(storedUser);
    }
  }, [propUser]);

  const sections = 
  [
    { name: "Aptitude", icon: <FaBook />, path: "/aptitude" },
    { name: "English", icon: <FaLanguage />, path: "/english" },
    { name: "Telugu", icon: <FaLanguage />, path: "/telugu" },
    { name: "College Details", icon: <FaUniversity />, path: "/college-details" },
  ];

  return (
    <>
      {/* Hamburger */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </div>

      <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
        {/* Logo */}
        <div className="logo">{isOpen ? "SkillPath" : "SP"}</div>

        {/* Navigation Sections */}
        <ul className="navSections">
          {sections.map((section) => (
            <li
              key={section.name}
              className={location.pathname === section.path ? "active" : ""}>
              <Link to={section.path}>
                <span className="icon">{section.icon}</span>
                {isOpen && <span className="linkText">{section.name}</span>}
              </Link>
            </li>
          ))}
        </ul>

        {/* Profile + Logout */}
        <div className="sidebarBottom">
          <div className="profile">
            <FaUserCircle className="profileIcon" />
            {isOpen && <span>{user?.name || "User"}</span>}
          </div>
          <Link to="/" className="logoutBtn">
            <FaSignOutAlt />
            {isOpen && <span>Logout</span>}
          </Link>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;