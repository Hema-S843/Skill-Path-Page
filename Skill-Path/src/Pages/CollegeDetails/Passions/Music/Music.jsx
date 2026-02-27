import React from "react";
import "./Music.css";

import KMImage from "../../../../assets/CollageDetails/KM-Music-image.jpg";
import BHUImage from "../../../../assets/CollageDetails/Bannaras-Music-image.png";
import BhatkhandeImage from "../../../../assets/CollageDetails/Bhatkhande-Music-image.jpg";
import DUImage from "../../../../assets/CollageDetails/University-music-image.jpg";
import VisvaImage from "../../../../assets/CollageDetails/Visva-Music-img.jpg";
import MysoreImage from "../../../../assets/CollageDetails/Mysore-Music-img.jpg";
import TNImage from "../../../../assets/CollageDetails/Tamil-Music-img.jpg";

const colleges = [
  {
    name: "KM Music Conservatory",
    courses: "B.Mus, Diploma, Western & Indian Classical",
    fee: "₹50,000 – ₹1,00,000",
    location: "Chennai, Tamil Nadu",
    entrance: "Audition + Interview",
    alumni: "Students of A. R. Rahman, Film / Contemporary Music",
    img: KMImage,
  },
  {
    name: "Banaras Hindu University – Faculty of Performing Arts",
    courses: "B.Mus, M.Mus, Vocal, Instrumental",
    fee: "₹20,000 – ₹50,000",
    location: "Varanasi, UP",
    entrance: "Practical Test / Audition",
    alumni: "Ravi Shankar (historical)",
    img: BHUImage,
  },
  {
    name: "Bhatkhande Music Institute",
    courses: "B.Mus, M.Mus, Classical, Light Music",
    fee: "₹25,000 – ₹60,000",
    location: "Lucknow, UP",
    entrance: "Audition / Practical Exam",
    alumni: "Vidyadhar Vyas",
    img: BhatkhandeImage,
  },
  {
    name: "University of Delhi – Department of Music",
    courses: "B.Mus, M.Mus, Vocal & Instrumental",
    fee: "₹20,000 – ₹40,000",
    location: "Delhi",
    entrance: "Practical Exam / Interview",
    alumni: "Raghav Sachar",
    img: DUImage,
  },
  {
    name: "Visva-Bharati University – Faculty of Music",
    courses: "B.Mus, M.Mus, Rabindra Sangeet",
    fee: "₹15,000 – ₹35,000",
    location: "Santiniketan, West Bengal",
    entrance: "Audition / Practical Test",
    alumni: "Srikanto Acharya",
    img: VisvaImage,
  },
  {
    name: "Mysore University – School of Arts and Music",
    courses: "B.Mus, M.Mus, Classical, Folk",
    fee: "₹20,000 – ₹40,000",
    location: "Mysore, Karnataka",
    entrance: "Practical Exam / Audition",
    alumni: "Gangubai Hangal",
    img: MysoreImage,
  },
  {
    name: "Tamil Nadu Music College",
    courses: "B.Mus, Diploma, Carnatic & Western Music",
    fee: "₹25,000 – ₹50,000",
    location: "Chennai, Tamil Nadu",
    entrance: "Audition / Practical Test",
    alumni: "Neyveli Raghavan",
    img: TNImage,
  },
];

function Music() {
  return (
    <div className="music-container">
      <h1 className="music-title">🎵 Top Music Colleges in India</h1>

      <div className="music-grid">
        {colleges.map((college, index) => (
          <div
            key={index}
            className="music-card"
            style={{ backgroundImage: `url(${college.img})` }}>
            <h3>{college.name}</h3>
            <p><strong>Courses:</strong> {college.courses}</p>
            <p><strong>Fee:</strong> {college.fee}</p>
            <p><strong>Location:</strong> {college.location}</p>
            <p><strong>Entrance:</strong> {college.entrance}</p>
            <p><strong>Famous Alumni:</strong> {college.alumni}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Music;