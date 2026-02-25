import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    
    navigate("/dashboard");
  };

  return (
    <div className="loginContainer">

      <div className="loginCard">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>

          <div className="inputGroup">
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

          <div className="inputGroup">
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

          <button type="submit" className="loginBtn">
            Login
          </button>
        </form>

        <p className="registerText">
          Don't have an account?{" "}
          <span onClick={() => navigate("/")}>
            Register
          </span>
        </p>

      </div>

    </div>
  );
}

export default Login;