import React from "react";

const HelpPage = () => {
  return (
    <div className="help-page">
      <h1>Help Yourself 😓</h1>
      <section>
        <h2>Getting Started</h2>
        <p>Learn how to set up and use the application.</p>
      </section>
      <section>
        <h2>FAQs</h2>
        <p>Find answers to common questions.</p>
      </section>
      <section>
        <h2>AI Assistance 🤖</h2>
        <p>
          Learn how AI features enhance your experience and how to interact with
          AI-powered tools.
        </p>
        <button className="chat-button">Chat</button>
      </section>
      <section>
        <h2>Contact Support</h2>
        <p>If you need further assistance, reach out to our support team.</p>
      </section>
    </div>
  );
};

export default HelpPage;
