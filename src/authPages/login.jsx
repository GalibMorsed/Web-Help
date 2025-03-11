import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  };

  return (
    <div className="log-container">
      <div className="log-box-container">
        {/* Left Side - Thoughts & Ideas Section */}
        <div className="log-left-side">
          <h2>Share Your Thoughts and Ideas</h2>
          <p>
            In a world driven by innovation, your thoughts and ideas are the
            spark that fuels progress. Every groundbreaking invention, every
            revolutionary breakthrough, once began as a simple idea in someone's
            mind. Your creativity has the power to shape the future—embrace it,
            refine it, and let it inspire change.
          </p>

          <div className="log-image-container">
            <img src="/public/postImg.jpg" alt="Creative Thinking" />
            <img src="/public/postImg2.png" alt="Brainstorming Ideas" />
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="log-right-side">
          <div className="login-box">
            <h2 className="log-title">Login</h2>
            {error && <p className="error-message">{error}</p>}
            <form className="log-form" onSubmit={handleSubmit}>
              <label htmlFor="email" className="log-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="log-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label htmlFor="password" className="log-label">
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

              <button type="submit" className="log-button" disabled={loading}>
                Login
              </button>
            </form>
            <p className="log-create-account">
              New here? <Link to="/SignUpForm">Create an account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
