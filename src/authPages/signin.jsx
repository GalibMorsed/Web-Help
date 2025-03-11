import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { getFirestore, doc, setDoc } from "firebase/firestore"; // Import Firestore

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    repassword: "",
    aadhar: "",
    aadharDoc: null,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, aadharDoc: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.repassword) {
      setError("Passwords do not match!");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    }

    try {
      setError("");
      setLoading(true);
      const userCredential = await signup(formData.email, formData.password);
      const user = userCredential.user;
      // Store user data in Firestore
      const db = getFirestore();
      await setDoc(doc(db, "users", user.uid), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        aadhar: formData.aadhar,
        aadharDoc: formData.aadharDoc ? formData.aadharDoc.name : null,
      });
      navigate("/LoginForm"); // Redirect to login page
    } catch (error) {
      console.error("Error creating account:", error); // Log the error
      setError("Failed to create an account");
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <div className="box-container">
        <div className="left-side">
          <h2>Join Us & Share Your Ideas</h2>
          <p>
            Join our vibrant and ever-growing community, where innovation meets
            opportunity! Your ideas, creativity, and unique perspectives have
            the power to inspire change and drive progress. Connect with
            forward-thinkers, collaborate on groundbreaking projects, and gain
            access to exclusive opportunities that can propel your vision to new
            heights. Whether you're an innovator, a dreamer, or a
            problem-solver, your contributions matter. Don’t just stand on the
            sidelines—be a part of something truly extraordinary. Register today
            and start shaping the future!
          </p>
          <div className="image-container">
            <img src="/public/postImg2.png" alt="Join Community" />
            <img src="/public/postImg.jpg" alt="Creative Ideas" />
          </div>
        </div>

        <div className="right-side">
          <div className="signup-box">
            <h2 className="title">Sign Up</h2>
            {error && <p className="error-message">{error}</p>}
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

              <button type="submit" className="button" disabled={loading}>
                Sign Up
              </button>
            </form>
            <p className="create-account">
              Already have an account? <Link to="/LoginForm">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
