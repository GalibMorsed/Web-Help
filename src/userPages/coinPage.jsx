import React, { useState } from "react";
import { Link } from "react-router-dom";

const CoinHistory = () => {
  const [coinCount, setCoinCount] = useState(100);
  const history = [
    {
      date: "2024-02-25",
      amount: "500 Coins",
      method: "Credit Card",
      status: "Completed",
      statusClass: "status-success",
    },
    {
      date: "2024-02-20",
      amount: "1000 Coins",
      method: "PayPal",
      status: "Completed",
      statusClass: "status-success",
    },
    {
      date: "2024-02-15",
      amount: "200 Coins",
      method: "Google Pay",
      status: "Pending",
      statusClass: "status-pending",
    },
    {
      date: "2024-02-10",
      amount: "1500 Coins",
      method: "Debit Card",
      status: "Failed",
      statusClass: "status-failed",
    },
  ];

  return (
    <div>
      <header className="navbar">
        <Link to="/">
          <h2 className="logo">Web-Help</h2>
        </Link>
        <div className="nav-right">
          <div className="coin-section">💰 Coins: {coinCount}</div>
          <button className="search-icon">🔍</button>
          <img
            src="../../public/userImg.avif"
            alt="User"
            className="nav-user-pic"
          />
        </div>
        <div className="hamburger-menu">
          <button className="hamburger">☰</button>
          <div className="menu-content">
            <Link to="/UserPage">Profile</Link>
            <Link to="/">Community</Link>
            <Link to="/DonationPage">Donation</Link>
            <Link to="LogoutForm">Logout</Link>
          </div>
        </div>
      </header>
      <div className="container">
        <main className="coin-history">
          <h2>Coin Purchase History</h2>
          <table className="history-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {history.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.date}</td>
                  <td>{entry.amount}</td>
                  <td>{entry.method}</td>
                  <td className={entry.statusClass}>{entry.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
};

export default CoinHistory;
