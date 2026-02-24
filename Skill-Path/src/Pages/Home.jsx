import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Home.css";

function Home() 
{
  const text = "Welcome to SkillPath";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  // 🔐 Check login status (example: using localStorage)
  const isLoggedIn = localStorage.getItem("user");

  useEffect(() => 
  {
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => 
    {
      if (!isDeleting && index < text.length) 
      {
        setDisplayText(text.slice(0, index + 1));
        setIndex(index + 1);
      } 
      else if (isDeleting && index > 0) 
      {
        setDisplayText(text.slice(0, index - 1));
        setIndex(index - 1);
      } 
      else if (index === text.length) 
      {
        setTimeout(() => setIsDeleting(true), 1000);
      } 
      else if (index === 0)
      {
        setIsDeleting(false);
      }
      
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [index, isDeleting, text]);

  return (
    <div className="page">

      {/* 🔥 Top Loop Typing */}
      <div className="topTyping">
        {displayText}
      </div>

      {/* Main Card */}
      <div className="card">
        <h1 className="logo">🎓 SkillPath</h1>

        <p className="description">
          SkillPath helps students improve aptitude, communication skills,
          and professional development to achieve career success.
        </p>

        <div className="buttonContainer">

          {/* If not logged in → Show Register */}
          {!isLoggedIn && (
            <Link to="/register">
              <button className="registerBtn">Register</button>
            </Link>
          )}

          {/* If logged in → Show Already Logged In */}
          {isLoggedIn && (
            <button className="loginBtn">Already Logged In</button>
          )}

        </div>
      </div>

    </div>
  );
}

export default Home;