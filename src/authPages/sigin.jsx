import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    repassword: "",
    aadhar: "",
    aadharDoc: null,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, aadharDoc: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.repassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form Data:", formData);
    // Implement form submission logic
  };

  return (
    <div className="container">
      <div className="box-container">
        {/* Left Side - Community Section */}
        <div className="left-side">
          <h2>Join Us & Share Your Ideas</h2>
          <p>
            Join our community and be a part of something great. Your thoughts,
            ideas, and innovation can bring positive changes. Register today to
            unlock opportunities and share your perspectives with the world.
          </p>
          <div className="image-container">
            <img src="../../public/postImg2.png" alt="Join Community" />
            <img src="../../public/postImg.jpg" alt="Creative Ideas" />
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="right-side">
          <div className="signup-box">
            <h2 className="title">Sign Up</h2>
            <form className="form" onSubmit={handleSubmit}>
              <label htmlFor="name" className="label">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="input"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="input"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="phone" className="label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="input"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <label htmlFor="password" className="label">
                Enter Password
              </label>
              <input
                type="password"
                id="password"
                className="input"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <label htmlFor="repassword" className="label">
                Re-enter Password
              </label>
              <input
                type="password"
                id="repassword"
                className="input"
                placeholder="Re-enter your password"
                value={formData.repassword}
                onChange={handleChange}
                required
              />

              <label htmlFor="aadhar" className="label">
                Aadhar Card Number
              </label>
              <input
                type="text"
                id="aadhar"
                className="input"
                placeholder="Enter your Aadhar number"
                value={formData.aadhar}
                onChange={handleChange}
                required
              />

              <label htmlFor="aadhar-doc" className="label">
                Upload Aadhar Card
              </label>
              <input
                type="file"
                id="aadhar-doc"
                className="input"
                accept="image/*,application/pdf"
                onChange={handleFileChange}
                required
              />

              <button type="submit" className="button">
                Sign Up
              </button>
            </form>
            <p className="create-account">
              Already have an account? <Link to={"/LoginForm"}>Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
