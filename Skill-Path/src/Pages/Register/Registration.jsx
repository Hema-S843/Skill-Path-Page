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

    if (role === "student") {
      alert("Student Registered Successfully!");
    } else {
      alert("Admin Created Successfully!");
    }

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
        <h2>Welcome</h2>
        <p>You are one step away from success 🚀</p>

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
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name *"
              value={formData.firstName}
              onChange={handleChange}
              className={errors.firstName ? "errorInput" : ""}
            />
            {errors.firstName && <p className="errorText">{errors.firstName}</p>}
          </div>

          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name *"
              value={formData.lastName}
              onChange={handleChange}
              className={errors.lastName ? "errorInput" : ""}
            />
            {errors.lastName && <p className="errorText">{errors.lastName}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "errorInput" : ""}
            />
            {errors.email && <p className="errorText">{errors.email}</p>}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password *"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? "errorInput" : ""}
            />
            {errors.password && <p className="errorText">{errors.password}</p>}
          </div>

          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password *"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={errors.confirmPassword ? "errorInput" : ""}
            />
            {errors.confirmPassword && (
              <p className="errorText">{errors.confirmPassword}</p>
            )}
          </div>

          <button type="submit" className="registerBtn">
            {role === "student" ? "Register Student" : "Create Admin"}
          </button>
        </form>

        {/* Divider */}
        <div className="divider">
          <span>OR</span>
        </div>

        {/* Login Section */}
        <div className="loginSection">
          Already logged in?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </div>

      </div>
    </div>
  );
}

export default Registration;