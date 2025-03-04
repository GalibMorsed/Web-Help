import React, { useState } from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  const [coinCount, setCoinCount] = useState(100);
  const posts = [
    {
      id: 1,
      user: "User 1",
      userPic: "../../public/userImg.avif",
      postImg: "../../public/postImg.jpg",
      caption: "Had an amazing time at the beach today! 🌊",
      upvotes: 10,
    },
    {
      id: 2,
      user: "User 2",
      userPic: "../../public/userImg.avif",
      postImg: "../../public/postImg.jpg",
      caption: "New coding setup! What do you think? 💻",
      upvotes: 25,
    },
  ];

  return (
    <div>
      <header className="navbar">
        <h2 className="logo">Web-Help</h2>
        <div className="nav-right">
          <div className="coin-section">💰 Coins: {coinCount}</div>
          <img
            src="../../public/userImg.avif"
            alt="User"
            className="nav-user-pic"
          />
        </div>
        <div className="hamburger-menu">
          <Link to={"/SearchPage"}>
            <button className="search-icon">🔍</button>
          </Link>
          <button className="hamburger">☰</button>
          <div className="menu-content">
            <Link to="/UserPage">Profile</Link>
            <Link to="/CoinHistory">Coin History</Link>
            <Link to="/DonationPAge">Donation</Link>
            <Link to="/LoginForm">Logout</Link>
          </div>
        </div>
      </header>
      <div className="container">
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
    </div>
  );
};

export default MainPage;
