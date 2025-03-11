import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Withdrawl = () => {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (amount <= 499) {
      alert("The amount must be more than 500.");
    } else {
      console.log("Form submitted");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <div className="payment-container">
      <div className="header">Payment</div>
      <div className="income-info">
        <h3>Your Income</h3>
        <p>
          Total Coins: <strong>158</strong>, Total earnings:{" "}
          <strong>53 Coins</strong>
        </p>
        <p className="min-withdraw">
          Minimum Withdraw on: <strong>500 Coins</strong>
        </p>
      </div>
      <h4 className="form-title">Payment Withdraw Form</h4>
      <form className="withdraw-form" onSubmit={handleSubmit}>
        <label>Name*</label>
        <input type="text" placeholder="Enter your name" required />

        <label>Email*</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Phone*</label>
        <input type="tel" placeholder="Enter your phone number" required />

        <label>Payment Method*</label>
        <select
          required
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="">Select</option>
          <option value="upi">UPI</option>
          <option value="bank">Bank Transfer</option>
          <option value="paypal">PayPal</option>
        </select>

        {/* UPI Fields */}
        {paymentMethod === "upi" && (
          <>
            <label>UPI ID*</label>
            <input type="text" placeholder="Enter UPI ID" required />

            <label>UPI Number*</label>
            <input type="text" placeholder="Enter UPI Number" required />
          </>
        )}

        {/* Bank Transfer Fields */}
        {paymentMethod === "bank" && (
          <>
            <label>Account Number*</label>
            <input type="text" placeholder="Enter Account Number" required />

            <label>IFSC Code*</label>
            <input type="text" placeholder="Enter IFSC Code" required />

            <label>Bank Name*</label>
            <input type="text" placeholder="Enter Bank Name" required />
          </>
        )}

        {/* PayPal Field */}
        {paymentMethod === "paypal" && (
          <>
            <label>PayPal Email*</label>
            <input type="email" placeholder="Enter PayPal Email" required />
          </>
        )}

        <label>Amount*</label>
        <input
          type="number"
          placeholder="Enter amount"
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
      <button className="proof-btn">Payments Proof</button>
    </div>
  );
};

export default Withdrawl;
