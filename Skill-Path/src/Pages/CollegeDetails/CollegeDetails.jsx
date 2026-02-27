import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import "./CollegeDetails.css";

function CollegeDetails() 
{
  const navigate = useNavigate();

  const syllabusData = {
    "maths-with-computer-science": [
      "Mathematics",
      "Tamil",
      "English",
      "Physics",
      "Chemistry",
      "Computer Science"
    ],
    "biology-with-computer-science": [
      "Biology",
      "Tamil",
      "English",
      "Physics",
      "Chemistry",
      "Computer Science"
    ],
    "biology-with-mathematics": [
      "Biology",
      "Mathematics",
      "Tamil",
      "English",
      "Physics",
      "Chemistry"
    ],
    "commerce": [
      "Commerce",
      "Accountancy",
      "Economics",
      "Tamil",
      "English",
      "Business Maths"
    ],
    "arts-and-humanities": [
      "History",
      "Geography",
      "Political Science",
      "Tamil",
      "English"
    ]
  };

  /* ✅ Passion Data */
  const passionData = {
    music: {
      title: "🎵 Music",
      path:"/music",
      description:
        "Music is the art of expressing emotions through sound and rhythm."
    },
    design: {
      title: "🎨 Design",
      path:"/design",
      description:
        "Design is creating attractive and useful visuals or products using creativity."
    },
    coding: {
      title: "💻 Coding",
      path:"/coding",
      description:
        "Coding is writing instructions to build apps, websites, and software."
    },
    drawing: {
      title: "✏️ Drawing",
      path:"/drawing",
      description:
        "Drawing is expressing ideas and imagination through sketches and art."
    },
    sports: {
      title: "⚽ Sports",
      path:"/sports",
      description:
        "Sports help improve physical fitness, teamwork, and discipline."
    },
    photography: {
      title: "📸 Photography",
      description:
        "Photography is capturing moments creatively using a camera."
    }
  };

  const handleGroupClick = (groupKey) => {
    navigate(`/college/${groupKey}`);
  };

  /* ✅ NEW: Passion click navigation */
  const handlePassionClick = (passionKey) => {
    navigate(`/passion/${passionKey}`);
  };

  return (
    <>
      <Sidebar />
      <div className="college-container">

        <h2 className="college-title">Select Your Group</h2>

        <div className="group-box-container">
          {Object.keys(syllabusData).map((groupKey, index) => (
            <div
              key={index}
              className="group-box"
              onClick={() => handleGroupClick(groupKey)}
            >
              <h3>{index + 1}. {groupKey.replace(/-/g, " ")}</h3>

              <ul>
                {syllabusData[groupKey].map((subject, i) => (
                  <li key={i}>{subject}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr style={{ margin: "70px 0" }} />

        {/* ===== Passion Section ===== */}
        <div className="passion-section">

          <h2 className="passion-title">Your Passion</h2>

          <div className="passion-container">
            {Object.keys(passionData).map((key, index) => (
              <div
                key={index}
                className="passion-box"
                onClick={() => handlePassionClick(key)}   // ✅ Click panna next page pogum
              >
                <h3>{passionData[key].title}</h3>
                <p style={{ fontSize: "18px", marginTop: "10px" }}>
                  {passionData[key].description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </>
  );
}

export default CollegeDetails;