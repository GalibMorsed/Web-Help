import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/authContext";

import LoginForm from "./authPages/login";
import SignUpForm from "./authPages/signin";
import HomePage from "./sourcePages/homePage";
import UserHome from "./sourcePages/userHome";
import CoinHistory from "./userPages/coinPage";
import DonationHistory from "./userPages/donationHistory";
import CreatePost from "./userPages/createPost";
import SearchPage from "./homeComponents/searchPage";
import AboutUs from "./homeComponents/about";
import HelpPage from "./homeComponents/help";
import AiPage from "./authPages/aiPage";
import PaymentPage from "./homeComponents/paymentPage";
import SettingPage from "./userPages/settingPage";
import Withdrawl from "./userPages/withdrawl";

function App() {
  return (
    <Router>
      <AuthProvider>
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
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/HelpPage" element={<HelpPage />} />
            <Route path="/AiPage" element={<AiPage />} />
            <Route path="/PaymentPage" element={<PaymentPage />} />
            <Route path="/SettingPage" element={<SettingPage />} />
            <Route path="/Withdrawl" element={<Withdrawl />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
