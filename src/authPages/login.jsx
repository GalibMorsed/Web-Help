import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Phone:", phone, "Password:", password);
    // Add authentication logic here
  };

  return (
    <div className="log-container">
      <div className="log-box-container">
        {/* Left Side - Thoughts & Ideas Section */}
        <div className="log-left-side">
          <h2>Share Your Thoughts and Ideas</h2>
          <p>
            In a world full of innovation, your thoughts and ideas matter. Every
            great invention.
          </p>

          <div className="log-image-container">
            <img src="../../public/postImg.jpg" alt="Creative Thinking" />
            <img src="../../public/postImg2.png" alt="Brainstorming Ideas" />
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="log-right-side">
          <div className="login-box">
            <h2 className="log-title">Login</h2>
            <form className="log-form" onSubmit={handleSubmit}>
              <label htmlFor="phone" className="log-label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="log-input"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />

              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="log-input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type="submit" className="log-button">
                Login
              </button>
            </form>
            <p className="log-create-account">
              New here? <Link to={"/SignUpForm"}>Create an account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
