import React, { useState } from "react";
import "./product.css";

const PaymentButton = ({ product }) => {
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);

  const handlePayment = () => {
    const options = {
      key: "rzp_test_6SHyjY13eIV0xR", // Your Razorpay Test API Key
      amount: product.price * 100, // Convert to paise (price in INR)
      currency: "INR",
      name: "Product Purchase",
      description: product.name,
      handler: function (response) {
        if (response && response.razorpay_payment_id) {
          alert(
            "Payment Successful! Transaction ID: " +
              response.razorpay_payment_id
          );

          // Set payment successful to true
          setPaymentSuccessful(true);
        } else {
          alert("Payment failed or was canceled.");
        }
      },
      prefill: {
        name: "John Doe",
        email: "john.doe@example.com",
        contact: "9999999999",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
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
      {paymentSuccessful && (
        <div style={styles.successMessageContainer}>
          <p style={styles.warningText}>
            ⚠{" "}
            <span style={styles.warningNote}>
              Make sure to click the "Download Now" button to download your
              product. If you refresh this page, you may lose your product. So,
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
    // backgroundColor: "#f7f7f7",
    borderRadius: "8px",
    // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
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
  paymentButtonHover: {
    backgroundColor: "#0056b3",
  },
  successMessageContainer: {
    marginTop: "30px",
    backgroundColor: "#f8f9fa",
    padding: "20px",
    borderRadius: "8px",
    border: "1px solid #dee2e6",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  warningText: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#ff9800", // Orange color for warning
    marginBottom: "20px",
  },
  warningNote: {
    fontSize: "16px",
    color: "#333",
  },
  downloadButton: {
    padding: "12px 30px",
    fontSize: "18px",
    backgroundColor: "#28a745", // Green button for success
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(40, 167, 69, 0.2)",
    transition: "background-color 0.3s ease",
  },
  downloadButtonHover: {
    backgroundColor: "#218838",
  },
};

export default PaymentButton;
