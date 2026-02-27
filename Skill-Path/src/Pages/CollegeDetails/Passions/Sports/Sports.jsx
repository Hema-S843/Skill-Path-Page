import React from "react";
import "./Sports.css";

function Sports() {
  return (
    <div className="sports-container">
      <h1 className="page-title">🏆 Best Sports Colleges</h1>

   {/* India Section */}
      <h2 className="section-title">🇮🇳 Best Sports Colleges in India</h2>

      <div className="sports-grid">

        <div className="sports-card">
          <h3>🥇 Netaji Subhas National Institute of Sports (NIS Patiala)</h3>
          <p>India’s top coaching institute</p>
          <p>Olympic level training</p>
          <p>Multiple sports facilities</p>
        </div>

        <div className="sports-card">
          <h3>🥈 Lakshmibai National Institute of Physical Education (LNIPE)</h3>
          <p>Deemed University</p>
          <p>B.P.Ed / M.P.Ed / Sports Science</p>
          <p>National level reputation</p>
        </div>

        <div className="sports-card">
          <h3>🥉 Sports Authority of India (SAI Centres)</h3>
          <p>India fulla centres</p>
          <p>Scholarship support</p>
          <p>All major sports training</p>
        </div>

        <div className="sports-card">
          <h3>🏏 National Cricket Academy</h3>
          <p>Cricket special</p>
          <p>BCCI controlled academy</p>
        </div>

        <div className="sports-card">
          <h3>🎓 Indira Gandhi Institute of Physical Education and Sports Sciences</h3>
          <p>Delhi University affiliated</p>
          <p>Strong academics + sports</p>
        </div>
    </div>
      {/* Tamil Nadu Section */}
      <h2 className="section-title">🏆 Best Sports Colleges in Tamil Nadu</h2>

      <div className="sports-grid">

        <div className="sports-card">
          <h3>🏅 Tamil Nadu Physical Education and Sports University</h3>
          <p>Only sports university in TN</p>
          <p>B.P.Ed / M.P.Ed / Coaching courses</p>
          <p>Top choice in Tamil Nadu</p>
        </div>

        <div className="sports-card">
          <h3>🥈 YMCA College of Physical Education</h3>
          <p>Very old & reputed college</p>
          <p>Good sports infrastructure</p>
        </div>

        <div className="sports-card">
          <h3>🥉 Alagappa University</h3>
          <p>Physical education courses</p>
          <p>State level recognition</p>
        </div>

        <div className="sports-card">
          <h3>🏫 Bharathiar University</h3>
          <p>Sports Science & Physical Education programs</p>
        </div>

      </div>


    </div>
  );
}

export default Sports;