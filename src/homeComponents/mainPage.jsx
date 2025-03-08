import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  const [coinCount, setCoinCount] = useState(1000);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const hideTime = localStorage.getItem("hideMessageUntil");
    if (!hideTime || new Date().getTime() > hideTime) {
      setShowMessage(true);
    }
  }, []);

  const handleClose = () => {
    const oneHourLater = new Date().getTime() + 60 * 60 * 1000;
    localStorage.setItem("hideMessageUntil", oneHourLater);
    setShowMessage(false);
  };

  const posts = [
    {
      id: 1,
      user: "User 1",
      userPic: "/userImg.avif",
      postImg: "/postImg.jpg",
      caption: "Had an amazing time at the beach today! 🌊",
      upvotes: 10,
    },
    {
      id: 2,
      user: "User 2",
      userPic: "/userImg.avif",
      postImg: "/postImg.jpg",
      caption: "New coding setup! What do you think? 💻",
      upvotes: 25,
    },
  ];

  return (
    <div>
      <header className="main-navbar">
        <h2 className="main-logo">Web-Help</h2>
        <div className="main-nav-right">
          <div className="coin-section">💰 Coins: {coinCount}</div>
          <Link to={"/UserPage"}>
            <img src="/userImg.avif" alt="User" className="nav-user-pic" />
          </Link>
        </div>{" "}
        <Link to={"/SearchPage"}>
          <button className="search-icon">🔍</button>
        </Link>
        <div className="hamburger-menu">
          <button className="hamburger">☰</button>
          <div className="menu-content">
            <Link to="/UserPage">Profile</Link>
            <Link to="/CoinHistory">Coin History</Link>
            <Link to="/DonationPAge">Donation</Link>
            <Link to="/LoginForm">Logout</Link>
          </div>
        </div>
      </header>

      {showMessage && (
        <div className="message-box">
          <p>Buy your coins now and start donating today</p>
          <Link to={"/paymentPage"}>
            <button>Okay</button>
          </Link>
          <button onClick={handleClose}>Close</button>
        </div>
      )}

      <div className="main-container">
        <main className="feed">
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="post-user">
                <img src={post.userPic} alt={post.user} className="user-pic" />
                <span>{post.user}</span>
              </div>
              <img src={post.postImg} alt={post.user} className="post-img" />
              <p className="caption">{post.caption}</p>
              <div className="post-actions">
                <button className="upvote">🔼 {post.upvotes}</button>
                <button className="share-btn">🔗 Share</button>
              </div>
            </div>
          ))}
        </main>
      </div>

      <footer className="footer">
        <Link to="/AboutUs">About Us</Link>
        <Link to="/HelpPage">Help</Link>
      </footer>
    </div>
  );
};

export default MainPage;
