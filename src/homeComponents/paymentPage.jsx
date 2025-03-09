import { useState } from "react";
import axios from "axios";

const PaymentPage = () => {
  const [amount, setAmount] = useState(100);

  const handlePayment = async () => {
    // Load Razorpay script
    const loadScript = (src) => {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });
    };

    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Failed to load Razorpay. Check your internet connection.");
      return;
    }

    try {
      // Request order creation from backend
      const { data } = await axios.post("http://localhost:8080/orders", {
        amount: amount * 100,
        currency: "INR",
      });

      const options = {
        key: "rzp_test_yCdJquTC727i5J",
        amount: data.amount,
        currency: data.currency,
        name: "Platport Coins",
        description: "Purchase Platport Coins",
        order_id: data.order_id,
        handler: function (response) {
          alert(
            "Payment Successful! Payment ID: " + response.razorpay_payment_id
          );
        },
        prefill: {
          name: "John Doe", // Hardcoded for now, replace with user data if available
          email: "john@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#ff7f50",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Payment initiation failed:", error);
      alert(
        `Payment failed: ${error.response?.data?.message || error.message}`
      );
    }
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
            Buy digital coins to donate and access exclusive content on the
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
        <h3>Process Your Payment</h3>
        <button onClick={handlePayment} className="pay-button">
          Pay ₹{amount}
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
