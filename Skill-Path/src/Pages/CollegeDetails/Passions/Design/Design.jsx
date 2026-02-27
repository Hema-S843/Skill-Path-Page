import React from "react";
import "./Design.css";

function Design() 
{

  const exams = [
    // ===== National Level Exams =====
    {
      name: "UCEED",
      fullName: "Undergraduate Common Entrance Exam for Design",
      purpose: "B.Des admission",
      level: "National",
      pattern: "Aptitude + Visualization + Creativity",
      website: "https://www.uceed.iitb.ac.in",
      sampleLink: "https://www.uceed.iitb.ac.in/sample-paper"
    },

    {
      name: "CEED",
      fullName: "Common Entrance Exam for Design",
      purpose: "M.Des admission",
      level: "National",
      pattern: "Part A (Objective) + Part B (Design Problem)",
      website: "https://www.ceed.iitb.ac.in",
      sampleLink: "https://www.ceed.iitb.ac.in/sample-paper"
    },

    {
      name: "NIFT Entrance Exam",
      fullName: "Fashion Design Entrance",
      purpose: "Fashion & Design courses",
      level: "National",
      pattern: "CAT + GAT + Situation Test",
      website: "https://www.nift.ac.in",
      sampleLink: "https://nift.ac.in/sample-question-paper"
    },

    {
      name: "NID DAT",
      fullName: "National Institute of Design Aptitude Test",
      purpose: "B.Des / M.Des admissions",
      level: "National",
      pattern: "Prelims + Mains",
      website: "https://www.nid.edu",
      sampleLink: "https://www.nid.edu/sample-paper"
    },

    // ===== Private / University Exams =====
    {
      name: "MIT ID Entrance",
      fullName: "MIT Institute of Design",
      purpose: "B.Des / M.Des",
      level: "National (Private)",
      pattern: "Written + Portfolio + Interview",
      website: "https://mitid.edu.in",
      sampleLink: "https://www.nid.edu/sample-paper"
      
    },

    {
      name: "SEED",
      fullName: "Symbiosis Entrance Exam for Design",
      purpose: "B.Des admission",
      level: "National (Private)",
      pattern: "Creative Test + Portfolio + Interview",
      website: "https://www.sid.edu.in/seed",
      sampleLink: "https://www.nid.edu/sample-paper"
    },

    {
      name: "UDAT",
      fullName: "UPES Design Aptitude Test",
      purpose: "B.Des / M.Des in UPES",
      level: "University Level (Private)",
      pattern: "Creative + Analytical + Portfolio",
      website: "https://www.upes.ac.in",
      sampleLink: "https://www.nid.edu/sample-paper"
    },

    {
      name: "Pearl Academy Entrance",
      fullName: "Pearl Academy Design Test",
      purpose: "Fashion, Interior, Product Design",
      level: "National (Private)",
      pattern: "Portfolio + Creativity Test + Interview",
      website: "https://pearlacademy.com",
      sampleLink: "https://www.nid.edu/sample-paper"
    },

    {
      name: "JD Institute Entrance",
      fullName: "JD Institute of Fashion Technology",
      purpose: "Fashion / Design Programs",
      level: "National (Private)",
      pattern: "Portfolio + Creativity Test",
      website: "https://www.jdinstitute.com",
      sampleLink: "https://www.nid.edu/sample-paper"
    },

    {
      name: "Srishti Entrance",
      fullName: "Srishti School of Art & Design",
      purpose: "Art, Design & Technology",
      level: "University Level",
      pattern: "Portfolio + Creative Task",
      website: "https://srishti.ac.in",
      sampleLink: "https://www.nid.edu/sample-paper"
    },

    {
      name: "Galgotias Design Exam",
      fullName: "Galgotias University Design Entrance",
      purpose: "UG/PG Design Programs",
      level: "University Level",
      pattern: "University Entrance Test",
      website: "https://www.galgotiasuniversity.edu.in",
      sampleLink: "https://www.nid.edu/sample-paper"
    },

    {
      name: "Amity Design Entrance",
      fullName: "Amity University Design Entrance",
      purpose: "Fashion / Interior / Product Design",
      level: "University Level",
      pattern: "Written Test + Interview",
      website: "https://www.amity.edu",
      sampleLink: "https://www.nid.edu/sample-paper"
    }
  ];

  return (
    <div className="exams-container">
      <h1 className="page-title">🎓 Top Design Entrance Exams in India</h1>

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

            {exam.sampleLink && (
              <a
                href={exam.sampleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="sample-link">
                📄 Sample Question Paper
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Design;
