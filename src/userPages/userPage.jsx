import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserPage = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1234567890",
    location: "New York, USA",
    bio: "Web enthusiast",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [coinCount, setCoinCount] = useState(100);
  const [editProfile, setEditProfile] = useState(profile);

  const openEditForm = () => {
    setEditProfile(profile);
    setIsModalOpen(true);
  };

  const closeEditForm = () => {
    setIsModalOpen(false);
  };

  const saveProfile = () => {
    setProfile(editProfile);
    closeEditForm();
  };

  return (
    <div>
      <header className="user-navbar">
        <Link to="/">
          <h2 className="logo">Web-Help</h2>
        </Link>
        <div className="coin-section">💰 Coins: {coinCount}</div>
        <div className="hamburger-menu">
          <button className="hamburger">☰</button>
          <div className="menu-content">
            <Link to="/">Community</Link>
            <Link to="/CoinHistory">Coin History</Link>
            <Link to="/DonationPage">Donation</Link>
            <Link to="/LoginForm">Logout</Link>
          </div>
        </div>
      </header>

      <div className="user-container">
        <main className="user-profile">
          <img
            src="../../public/postImg2.png"
            alt="Cover Photo"
            className="cover-photo"
          />
          <div className="profile-details">
            <img
              src="../../public/userimg.avif"
              alt="Profile Picture"
              className="profile-pic"
            />
            <h2>
              {profile.name} <span className="badge">Verified</span>
            </h2>
            <p>Bio: {profile.bio}</p>
            <p>
              <strong>Email:</strong> {profile.email}
            </p>
            <p>
              <strong>Phone:</strong> {profile.phone}
            </p>
            <p>
              <strong>Location:</strong> {profile.location}
            </p>
            <div className="profile-actions">
              <button className="edit-profile" onClick={openEditForm}>
                Edit Profile
              </button>
              <Link to={"/CreatePost"}>
                <button className="create-post-btn">Create Post</button>
              </Link>
            </div>
          </div>
        </main>

        <div className="user-feed">
          <div className="user-post">
            <h3>John Doe</h3>
            <p>Had a great day today! #blessed</p>
            <img
              src="/public/postImg.jpg"
              alt="Post Image"
              className="post-image"
            />
            <button className="upvote">🔼 10</button>
            <button className="share-btn">🔗 Share</button>
          </div>
          <div className="user-post">
            <h3>John Doe</h3>
            <p>Loving the new update on this platform! 🚀</p>
            <img
              src="/public/PostImg.jpg"
              alt="Post Image"
              className="post-image"
            />
            <button className="upvote">🔼 Up</button>
            <button className="share-btn">🔗 Share</button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close" onClick={closeEditForm}>
              &times;
            </button>
            <h2>Edit Profile</h2>
            <label>Name:</label>
            <input
              type="text"
              value={editProfile.name}
              onChange={(e) =>
                setEditProfile({ ...editProfile, name: e.target.value })
              }
            />
            <label>Email:</label>
            <input
              type="email"
              value={editProfile.email}
              onChange={(e) =>
                setEditProfile({ ...editProfile, email: e.target.value })
              }
            />
            <label>Phone:</label>
            <input
              type="text"
              value={editProfile.phone}
              onChange={(e) =>
                setEditProfile({ ...editProfile, phone: e.target.value })
              }
            />
            <label>Location:</label>
            <input
              type="text"
              value={editProfile.location}
              onChange={(e) =>
                setEditProfile({ ...editProfile, location: e.target.value })
              }
            />
            <label>Bio:</label>
            <textarea
              value={editProfile.bio}
              onChange={(e) =>
                setEditProfile({ ...editProfile, bio: e.target.value })
              }
            />
            <button className="save" onClick={saveProfile}>
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPage;
