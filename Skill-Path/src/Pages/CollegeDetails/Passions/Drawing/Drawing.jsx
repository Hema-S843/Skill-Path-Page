import React from "react";
import "./Drawing.css";

function Drawing() {

  const exams = [

    {
      name: "Government College of Fine Arts, Chennai",
      fullName: "BFA Entrance (TN Govt Fine Arts)",
      purpose: "BFA / MFA admission",
      level: "State Level",
      pattern: "Drawing Test + Practical + Interview",
      website: "https://www.tn.gov.in",
    },

    {
      name: "Sir J. J. School of Art",
      fullName: "Fine Arts Entrance (Mumbai)",
      purpose: "BFA / MFA admission",
      level: "State/National",
      pattern: "Drawing Test + Portfolio",
      website: "https://www.jjiaa.org/home.htm",
    },

    {
      name: "Faculty of Fine Arts, BHU",
      fullName: "BHU Fine Arts Entrance",
      purpose: "BFA / MFA admission",
      level: "University Level",
      pattern: "Practical Drawing + Theory",
      website: "https://www.bhu.ac.in/visual.htm",
    },

    {
      name: "Faculty of Fine Arts, MSU Baroda",
      fullName: "MSU Fine Arts Entrance",
      purpose: "BFA / MFA admission",
      level: "University Level",
      pattern: "Drawing + Creative Test",
      website: "http://www.msubaroda.ac.in",
    },

    {
      name: "College of Art, Delhi",
      fullName: "Visual Arts Entrance",
      purpose: "BFA / MFA admission",
      level: "National Level",
      pattern: "Drawing Test + Interview",
      website: "http://colart.delhigovt.nic.in",
    },

    {
      name: "College of Fine Arts Kerala",
      fullName: "Kerala Fine Arts Entrance",
      purpose: "BFA / MFA programs",
      level: "State Level",
      pattern: "Drawing + Practical",
      website: "https://www.cfakerala.ac.in",
    },
    {
      name: "Kala Bhavana, Visva-Bharati University",
      fullName: "BFA / MFA Fine Arts Admission",
      purpose: "Painting, Sculpture, Printmaking, Design",
      level: "National Level",
      pattern: "Drawing Test + Portfolio + Interview",
      website: "https://visvabharati.ac.in",
    },
    
    {
      name: "Cholamandal Artists’ Village",
      fullName: "Fine Arts & Contemporary Art Programs",
      purpose: "Workshops, Studio Practice, Artist Development",
      level: "Professional / Private",
      pattern: "Portfolio Review / Direct Admission",
      website: "https://cholamandalart.com",
    }
  ];

  return (
    <div className="exams-container">
      <h1 className="page-title">
        🎨 Top Drawing / Fine Arts Colleges & Entrance Links
      </h1>

      {/* Warning Message */}
      <p style={{ fontSize: "12px", color: "gray", textAlign: "center", marginBottom: "25px" }}>
        *Please verify official site before applying
      </p>

      <div className="exams-grid">
        {exams.map((exam, index) => (
          <div key={index} className="exam-card">
            <h2>{exam.name}</h2>
            <h4>{exam.fullName}</h4>

            <p><strong>Purpose:</strong> {exam.purpose}</p>
            <p><strong>Level:</strong> {exam.level}</p>
            <p><strong>Pattern:</strong> {exam.pattern}</p>

            <a
              href={exam.website}
              target="_blank"
              rel="noopener noreferrer"
              className="official-link"
            >
              🌐 Official Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Drawing;