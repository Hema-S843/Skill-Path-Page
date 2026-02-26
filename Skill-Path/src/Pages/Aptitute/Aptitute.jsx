import React from "react";
import "./Aptitute.css";
import Sidebar from "../Components/Sidebar";
import { useNavigate } from "react-router-dom";

function Aptitute() {
  const navigate = useNavigate();

  const topics = [
    {
      title: "📊 Quantitative",
      path: "/quantitative",
      description: "Practice numbers, percentages, ratios, and time-speed-distance problems.",
    },
    {
      title: "🧩 Logical Reasoning",
      path: "/logical-reasoning",
      description: "Work on puzzles, series, blood relations, and coding-decoding.",
    },
    {
      title: "📈 Data Interpretation",
      path: "/data-interpretation",
      description: "Analyze tables, charts, and graphs to answer questions.",
    },
    {
      title: "🧮 Number Series",
      path: "/number-series",
      description: "Learn patterns in numbers and improve calculation speed.",
    },
    {
      title: "💡 Verbal Ability",
      path: "/verbal-ability",
      description: "Solve aptitude problems with shortcuts and tricks.",
    },
  ];

  return (
    <>
      <Sidebar />
      <div className="aptitute-container">
        <h1 className="aptitute-title">🧠 Aptitude Practice</h1>

        <div className="aptitute-grid">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="aptitute-card"
              onClick={() => navigate(topic.path)}
              style={{ cursor: "pointer" }} // makes it clear it's clickable
            >
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Aptitute;