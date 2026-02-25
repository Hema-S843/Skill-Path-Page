import React from "react";
import "./English.css";
import Sidebar from "../Components/Sidebar"

function English() {
  return (
    <>
    <Sidebar/>
    <div className="english-container">
      <h1 className="english-title">📘 English Practice</h1>

      <div className="english-card">
        <h3>🔤 Grammar</h3>
        <p>Practice tenses, articles, prepositions and sentence correction.</p>
      </div>

      <div className="english-card">
        <h3>📖 Vocabulary</h3>
        <p>Improve synonyms, antonyms and word meanings.</p>
      </div>

      <div className="english-card">
        <h3>📝 Comprehension</h3>
        <p>Read passages and answer questions.</p>
      </div>
    </div>
    </>
  );
}

export default English;