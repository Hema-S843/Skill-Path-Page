import React from "react";
import { useState } from "react";
import "./Aptitute.css";
import Sidebar from "../Components/Sidebar";

function Aptitute() 
{
  const questions = 
  [
    "Q1 | Number Series",
    "Q2 | Letter Series",
    "Q3 | Coding Decoding",
    "Q4 | Puzzle",
    "Q5 | Blood Relations",
    "Q6 | Syllogism",
    "Q7 | Direction Sense",
    "Q8 | Data Interpretation",
  ];

  const [activeQuestion, setActiveQuestion] = useState(questions[0]);
  const [completed, setCompleted] = useState(["Q1 | Number Series"]);

  const toggleComplete = (q) => 
  {
    if (completed.includes(q)) {
      setCompleted(completed.filter((c) => c !== q));
    } else {
      setCompleted([...completed, q]);
    }
  };

  const progress = Math.round((completed.length / questions.length) * 100);

  return (
  <>
    <Sidebar />
    <div className="aptitudeContainer">
      {/* Sidebar */}
      <aside className="aptitudeSidebar">
        <div className="aptitudeProgress">
          <h3>Aptitude</h3>
          <div className="progressBar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          <span className="progressText">{progress}% Complete</span>
        </div>

        <ul className="questionList">
          {questions.map((q) => (
            <li
              key={q}
              className={activeQuestion === q ? "active" : ""}
              onClick={() => setActiveQuestion(q)}>
              <span className="check">
                {completed.includes(q) ? "✔" : "⏺"}
              </span>{" "}
              {q}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="aptitudeContent">
        <h2>{activeQuestion}</h2>
        <p>
          {/* Replace with actual question/explanation */}
          This is the content for {activeQuestion}. You can display question, options, and explanation here.
        </p>
        <button className="completeBtn" onClick={() => toggleComplete(activeQuestion)}>
          {completed.includes(activeQuestion) ? "Mark as Incomplete" : "Mark as Completed"}
        </button>
      </main>
    </div>
  </>
  );
}

export default Aptitute;