import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginForm from "./authPages/login";
import SignUpForm from "./authPages/sigin";
import HomePage from "./sourcePages/homePage";
import UserHome from "./sourcePages/userHome";
import CoinHistory from "./userPages/coinPage";
import DonationHistory from "./userPages/donationHistory";
import CreatePost from "./userPages/createPost";
import SearchPage from "./homeComponents/searchPage";
import AboutUs from "./homeComponents/about";
import HelpPage from "./homeComponents/help";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/SignUpForm" element={<SignUpForm />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/UserPage" element={<UserHome />} />
          <Route path="/CoinHistory" element={<CoinHistory />} />
          <Route path="/DonationPage" element={<DonationHistory />} />
          <Route path="/CreatePost" element={<CreatePost />} />
          <Route path="/SearchPage" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
