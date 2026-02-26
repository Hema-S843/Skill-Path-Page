import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import "./Sidebar.css";

function Sidebar({ user: propUser }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(propUser || null);

  useEffect(() => {
    if (!propUser) {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser) setUser(storedUser);
    }
  }, [propUser]);

  const sections = [
    { name: "CMT Exam" , path:"/cmtexam"},
    { name: "T.T.E exam" , path:"/tteexam"},
    { name: "MAT Sample" , path:"/matexam"},
    { name: "Aptitute", path: "/aptitute" },
    { name: "English", path: "/english" },
    { name: "Telugu", path: "/telugu" },
    { name: "College Details", path: "/college-details" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="topbar">
      {/* Logo */}
      <div className="logo">
        SkillPath
      </div>

      {/* Navigation Links */}
      <ul className="navLinks">
        {sections.map((section) => (
          <li
            key={section.name}
            className={location.pathname === section.path ? "active" : ""}
          >
            <Link to={section.path}>{section.name}</Link>
          </li>
        ))}
      </ul>

      {/* Profile + Logout */}
      <div className="navRight">
        <div className="profile">
          <FaUserCircle size={23} />
          <span> Profile </span>
        </div>

        <button className="logoutBtn" onClick={handleLogout}>
          <FaSignOutAlt size={16} />
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );
}

export default Sidebar;