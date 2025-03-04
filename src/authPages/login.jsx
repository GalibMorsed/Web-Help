import React, { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data Submitted:", formData);
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2 className="title">Login</h2>
        <form onSubmit={handleSubmit} className="form">
          <label className="label">Phone Number</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="input" placeholder="Enter your phone number" required />

          <label className="label">Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} className="input" placeholder="Enter your password" required />

          <a href="#" className="forgot-password">Forgot Password?</a>

          <button type="submit" className="button">Login</button>
        </form>
        <p className="create-account">New here? <a href="sigin.jsx">Create an account</a></p>
      </div>
    </div>
  );
};

export default LoginForm;