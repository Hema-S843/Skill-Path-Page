import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registration.css";

function Registration() {
  const navigate = useNavigate();
  const [role, setRole] = useState("student");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    const { firstName, lastName, email, password, confirmPassword } = formData;

    if (!firstName) newErrors.firstName = "This field is required";
    if (!lastName) newErrors.lastName = "This field is required";
    if (!email) newErrors.email = "This field is required";
    if (!password) newErrors.password = "This field is required";
    if (!confirmPassword) newErrors.confirmPassword = "This field is required";

    if (password && confirmPassword && password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    alert(
      role === "student"
        ? "Student Registered Successfully!"
        : "Admin Created Successfully!"
    );

    navigate("/dashboard");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
  };

  return (
    <div className="dualContainer">
      
      {/* LEFT PANEL */}
      <div className="leftPanel">
        <h1 className="logo">SkillPath</h1>
        <p className="taglineMain">“Learn Today, Lead Tomorrow.”</p>
        <p className="taglineSub">“Small Steps, Big Success.”</p>

        {role === "student" ? (
          <button onClick={() => setRole("admin")}>Switch to Admin</button>
        ) : (
          <button onClick={() => setRole("student")}>Switch to Student</button>
        )}
      </div>

      {/* RIGHT PANEL */}
      <div className="rightPanel">
        <div className="toggleButtons">
          <button
            className={role === "student" ? "active" : ""}
            onClick={() => setRole("student")}
          >
            Student
          </button>

          <button
            className={role === "admin" ? "active" : ""}
            onClick={() => setRole("admin")}
          >
            Admin
          </button>
        </div>

        <h2>{role === "student" ? "Apply as a Student" : "Register as Admin"}</h2>

        <form className="formGrid" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name *"
            value={formData.firstName}
            onChange={handleChange}
            className={errors.firstName ? "errorInput" : ""}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name *"
            value={formData.lastName}
            onChange={handleChange}
            className={errors.lastName ? "errorInput" : ""}
          />

          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "errorInput" : ""}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password *"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? "errorInput" : ""}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password *"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={errors.confirmPassword ? "errorInput" : ""}
          />

          <button type="submit" className="registerBtn">
            {role === "student" ? "Register Student" : "Create Admin"}
          </button>
        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <div className="loginSection">
          Already logged in?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </div>
      </div>
    </div>
  );
}

export default Registration;