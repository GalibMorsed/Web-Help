import React, { useState, useEffect } from "react";

const Settings = () => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("English");
  const [visibility, setVisibility] = useState("Public");
  const [fontSize, setFontSize] = useState(16);
  const [fontStyle, setFontStyle] = useState("Arial");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleDeleteAccount = () => {
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      )
    ) {
      alert("Account deleted!");
    }
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>

      <div className="setting-item">
        <label>Theme:</label>
        <button onClick={handleThemeChange} className="theme-btn">
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>

      <div className="setting-item">
        <label>Language:</label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Kannada">kannada</option>
        </select>
      </div>

      <div className="setting-item">
        <label>Visibility:</label>
        <select
          value={visibility}
          onChange={(e) => setVisibility(e.target.value)}
        >
          <option value="Public">Public</option>
          <option value="Private">Private</option>
        </select>
      </div>

      <div className="setting-item">
        <label>Font Size:</label>
        <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
          <option value="12">12px</option>
          <option value="14">14px</option>
          <option value="16">16px</option>
          <option value="18">18px</option>
          <option value="20">20px</option>
          <option value="22">22px</option>
          <option value="24">24px</option>
        </select>
      </div>

      <div className="setting-item">
        <label>Font Style:</label>
        <select
          value={fontStyle}
          onChange={(e) => setFontStyle(e.target.value)}
        >
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
        </select>
      </div>

      <div className="setting-item delete">
        <button onClick={handleDeleteAccount} className="delete-btn">
          🚨 Delete Account
        </button>
      </div>
    </div>
  );
};

export default Settings;
