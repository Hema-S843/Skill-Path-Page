import React from "react";
import "./Coding.css";

function Coding() {
  return (
    <div className="coding-container">
      <h1 className="coding-title">💻 Coding After 12th</h1>

      <div className="coding-grid">
        
        {/* Engineering Courses */}
        <div className="coding-card">
          <h2>🎓 Engineering Courses</h2>
          <ul>
            <li>B.E / B.Tech Computer Science Engineering</li>
            <li>B.E / B.Tech Information Technology</li>
            <li>B.E Artificial Intelligence & Data Science</li>
            <li>B.E Cyber Security</li>
          </ul>
        </div>

        {/* Engineering Jobs */}
        <div className="coding-card">
          <h2>💼 Jobs After Engineering</h2>
          <ul>
            <li>Software Developer</li>
            <li>Full Stack Developer</li>
            <li>AI / Data Scientist</li>
            <li>Cyber Security Analyst</li>
            <li>Cloud Engineer</li>
          </ul>
        </div>

        {/* BSc Courses */}
        <div className="coding-card">
          <h2>🎓 B.Sc / BCA Courses</h2>
          <ul>
            <li>B.Sc Computer Science</li>
            <li>B.Sc Information Technology</li>
            <li>BCA (Bachelor of Computer Applications)</li>
          </ul>
        </div>

        {/* BSc Jobs */}
        <div className="coding-card">
          <h2>💼 Jobs After B.Sc / BCA</h2>
          <ul>
            <li>Web Developer</li>
            <li>App Developer</li>
            <li>Software Tester</li>
            <li>Technical Support Engineer</li>
            <li>Junior Developer</li>
          </ul>
        </div>

        {/* Higher Studies */}
        <div className="coding-card">
          <h2>🎓 Higher Studies Options</h2>
          <ul>
            <li>MCA (Master of Computer Applications)</li>
            <li>M.Sc Computer Science</li>
            <li>M.Tech</li>
            <li>MBA (IT / Systems)</li>
          </ul>
        </div>

        {/* Skills Level Section */}
        <div className="coding-card">
          <h2>🧠 Skills Level</h2>
          <h3>📈 Coding Growth Path</h3>

          <ul>
            <li><strong>🟢 Beginner</strong> → HTML, CSS</li>
            <li><strong>🟡 Intermediate</strong> → JavaScript, React</li>
            <li><strong>🔴 Advanced</strong> → Backend, Cloud, AI</li>
          </ul>

          <div className="links">
            <a 
              href="https://www.youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              📺 Learn on YouTube
            </a>

            <a 
              href="https://www.w3schools.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              🌐 Practice on W3Schools
            </a>
          </div>
        </div>

        {/* Top Companies */}
        <div className="coding-card">
          <h2>🏆 Top Companies</h2>
          <ul>
            <li>🌟 TCS</li>
            <li>🌟 Infosys</li>
            <li>🌟 Wipro</li>
            <li>🌟 Google</li>
            <li>🌟 Microsoft</li>
            <li>🌟 Zoho</li>
          </ul>
        </div>

        {/* Salary */}
        <div className="coding-card">
          <h2>💰 Salary Scope</h2>
          <p>
            Fresher: 3–6 LPA <br />
            2–3 Years: 8–15 LPA <br />
            Skilled Developer: 20L+
          </p>
        </div>

      </div>
    </div>
  );
}

export default Coding;