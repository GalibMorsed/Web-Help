import React, { useState } from "react";
import { FaSearch, FaHome, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [history, setHistory] = useState([]);

  const recommendedSearches = [
    "Traffic Congestion",
    "Water Management Issues",
    "Air Pollution",
    "High Cost of Living",
    "Governance and Planning Challenges",
    "Cultural and Linguistic Tensions",
    "Delayed Infrastructure Projects",
    "Environmental Degradation",
    "Flooding and Drainage Issues",
    "Public Transportation Costs",
  ];

  const handleSearch = () => {
    if (query.trim()) {
      setHistory([...history, query]);
    }
    const sampleResults = [
      "React Tutorial",
      "SCSS Guide",
      "JavaScript Basics",
      "Frontend Development",
    ];
    setResults(
      sampleResults.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const handleDeleteHistory = (index) => {
    setHistory(history.filter((_, i) => i !== index));
  };

  const handleSelected = (item) => {
    setQuery(item);
    handleSearch(item);
  };
  return (
    <div className="search-page">
      {/* Header */}
      <header className="header">
        <Link to={"/"}>
          <FaHome className="home-icon" />
        </Link>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Here"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <FaSearch className="search-icon" onClick={handleSearch} />
        </div>
      </header>

      {/* Search History */}
      <section className="search-history">
        <h3>Searched History</h3>
        <div className="history-list">
          {history.map((item, index) => (
            <span key={index} className="history-item">
              {item}{" "}
              <FaTimes
                className="close-icon"
                onClick={() => handleDeleteHistory(index)}
              />
            </span>
          ))}
        </div>
      </section>

      {/* Recommended Searches */}
      <section className="recommended-searches">
        <h3>Recommended Searches</h3>
        <div className="recommended-list">
          {recommendedSearches.map((item, index) => (
            <span
              key={index}
              className="recommended-item"
              onClick={() => handleSelected(item)}
            >
              {item}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SearchPage;
