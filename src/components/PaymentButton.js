import React, { useState, useEffect } from "react";
import "./product.css";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";

const PaymentButton = ({ product }) => {
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);

  useEffect(() => {
    // Check if Razorpay redirects back to this page with success query parameters
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.has("razorpay_payment_id")) {
      // Payment successful
      setPaymentSuccessful(true);
      alert("Payment Successful! You can now download your product.");
    } else if (queryParams.has("error")) {
      // Payment failed or canceled
      alert("Payment failed or canceled. Please try again.");
    }
  }, []);

  const handlePayment = () => {
    // Redirect to Razorpay payment link in the same tab
    window.location.href =
      "https://razorpay.me/@wertrends?amount=AbrAZZu%2Ffs1C7OoCxDm7hw%3D%3D";
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://wertrends.s3.eu-north-1.amazonaws.com/Filmora_13.6.13.9072+%2B+AI.rar";
    link.download = "Filmora_13.6.13.9072+AI.rar"; // Customize download file name here
    link.click();
  };

  return (
    <div>
      <div style={styles.container} className="buttonpay">
        <button style={styles.paymentButton} onClick={handlePayment}>
          Buy Now
        </button>
        <button
          style={styles.paymentButton}
          onClick={() => {
            window.open("https://t.me/WeRTrends_admin", "_blank");
          }}
        >
          Contact Admin
        </button>
      </div>


      <div style={styles.container} className="buttonpay">
        <button
          style={{
            ...styles.paymentButton,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#25D366", // WhatsApp green color
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
          onClick={() => {
            window.open(
              "https://wa.me/918154994406?text=Hello%20Admin,%20Here%20is%20my%20product%20id.",
              "_blank"
            );
          }}

        >
          <FaWhatsapp size={20} style={{ marginRight: "8px" }} /> {/* WhatsApp Icon */}
          Share Product Id
        </button>
        <button
          style={{
            ...styles.paymentButton,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FF0000", // YouTube red color
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
          onClick={() => {
            window.open(
              "https://www.youtube.com/watch?v=YOUR_VIDEO_ID", // Replace with your YouTube video link
              "_blank"
            );
          }}
        >
          <FaYoutube size={20} style={{ marginRight: "8px" }} /> {/* YouTube Icon */}
          How to Use
        </button>
      </div>

      {paymentSuccessful && (
        <div style={styles.successMessageContainer}>
          <h2>🎉 Congratulations! 🎉</h2>
          <p style={styles.warningText}>
            ⚠{" "}
            <span style={styles.warningNote}>
              Make sure to click the "Download Now" button to download your
              product. If you ⚠️Refresh this page, you may lose⚠️ your product. So,
              please save it somewhere safe.
            </span>
          </p>

          <button style={styles.downloadButton} onClick={handleDownload}>
            Download Now
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "0px",
    borderRadius: "8px",
    maxWidth: "500px",
    margin: "20px auto 10px",
  },
  paymentButton: {
    padding: "12px 30px",
    fontSize: "18px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0, 123, 255, 0.2)",
    transition: "background-color 0.3s ease",
  },
  successMessageContainer: {
    border: "5px solid",
    borderImage: "linear-gradient(90deg, #ff007f, #00ff7f, #007fff) 1",
    borderRadius: "15px",
    padding: "20px",
    textAlign: "center",
    animation: "borderAnimation 5s linear infinite",
  },
  warningText: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#ff9800",
    marginBottom: "20px",
  },
  warningNote: {
    fontSize: "16px",
    color: "#333",
  },
  downloadButton: {
    padding: "12px 30px",
    fontSize: "18px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(40, 167, 69, 0.2)",
    transition: "background-color 0.3s ease",
  },
};

export default PaymentButton;
