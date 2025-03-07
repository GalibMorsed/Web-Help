import { useState } from "react";

const PaymentPage = () => {
  const [amount, setAmount] = useState(100);

  const handlePayment = () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY", // Replace with your Razorpay key
      amount: amount * 100, // Razorpay requires amount in paise
      currency: "INR",
      name: "Platport Coins",
      description: "Purchase Platport Coins",
      handler: function (response) {
        alert(
          "Payment Successful! Payment ID: " + response.razorpay_payment_id
        );
      },
      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#ff7f50",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="payment-container">
      <div className="product-card">
        <img
          src="/donetionImg.jpg"
          alt="Platport Coins"
          className="product-image"
        />
        <div className="product-details">
          <h2>Platform Coins</h2>
          <p>
            Buy digital coins to donate and access exclusive content of the
            platform.
          </p>
          <h3>Set Your Amount</h3>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="amount-input"
            placeholder="Enter amount"
          />
        </div>
      </div>
      <div className="payment-section">
        <h3>Process Your Payment </h3>
        <button onClick={handlePayment} className="pay-button">
          Pay ₹{amount}
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
