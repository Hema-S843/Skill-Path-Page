import React from "react";
import "./Aptitute.css";
import Sidebar from"../Components/Sidebar"

function Aptitute() {
  const topics = [
    {
      title: "📊 Quantitative",
      description: "Practice numbers, percentages, ratios, and time-speed-distance problems.",
    },
    {
      title: "🧩 Logical Reasoning",
      description: "Work on puzzles, series, blood relations, and coding-decoding.",
    },
    {
      title: "📈 Data Interpretation",
      description: "Analyze tables, charts, and graphs to answer questions.",
    },
    {
      title: "🧮 Number Series",
      description: "Learn patterns in numbers and improve calculation speed.",
    },
    {
      title: "💡 Problem Solving",
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
          <div key={index} className="aptitute-card">
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