import React, { useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    aadhaar: "",
    idProof: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="container">
      <div className="signup-box">
        <h2 className="title">Sign Up</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-container">
            <div className="form-left">
              <label className="label">Full Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="input" required />

              <label className="label">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="input" required />

              <label className="label">Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="input" required />
            </div>
            <div className="form-right">
              <label className="label">Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} className="input" required />

              <label className="label">Re-enter Password</label>
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="input" required />

              <label className="label">Aadhaar Number</label>
              <input type="text" name="aadhaar" value={formData.aadhaar} onChange={handleChange} className="input" required />

              <label className="label">Upload Aadhaar Card</label>
              <input type="file" name="idProof" onChange={handleChange} className="input-file" accept="image/*,.pdf" required />
            </div>
          </div>
          <button type="submit" className="button">Sign Up</button>
        </form>
        <p className="already-account">Already have an account? <a href="login.jsx">Login</a></p>
      </div>
    </div>
  );
};

export default SignUpForm;