import React, { useState, useEffect } from "react";
import { Image1, Image2, Image3 } from "../assets/images";
import "./product.css";
import PaymentButton from "./PaymentButton";
const ProductDetails = ({ product }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [Image1, Image2, Image3];

  // Handle next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Handle previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  // Handle dot click to jump to the specific image
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div style={styles.container}>
      {/* Image Slider */}
      <div style={styles.sliderContainer}>
        <button onClick={handlePrev} style={styles.sliderButtonLeft}>
          &#8592;
        </button>
        <div style={styles.sliderWrapper} className="imagewrap">
          {images.map((image, index) => (
            <img
              height={500}
              key={index}
              src={image}
              alt={`Product Image ${index + 1}`}
              style={{
                ...styles.sliderImage,
                transform: `translateX(-${currentIndex * 100}%)`, // For smooth transition between images
              }}
            />
          ))}
        </div>
        <button onClick={handleNext} style={styles.sliderButtonRight}>
          &#8594;
        </button>
      </div>

      {/* Dots for Image Navigation */}
      <div style={styles.dotsContainer}>
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => handleDotClick(index)}
            style={{
              ...styles.dot,
              backgroundColor: currentIndex === index ? "#333" : "#ccc",
            }}
          ></span>
        ))}
      </div>

      {/* Product Details */}
      <h2 style={styles.productName}>{product.name}</h2>
      <PaymentButton product={product} />
      <h3 style={styles.productPrice}>Buy at Just ₹{product.price}</h3>

      <div style={styles.productDescription}>
        <h3>Features</h3>
        <ul style={styles.featureList}>
          <li style={{ textAlign: "left" }}>
            Filmora 13 with cutting-edge AI technology.
          </li>
          <li style={{ textAlign: "left" }}>
            Enhanced video editing capabilities.
          </li>
          <li style={{ textAlign: "left" }}>
            Automatic scene detection and AI-powered editing.
          </li>
          <li style={{ textAlign: "left" }}>
            Easy-to-use interface for professionals and beginners.
          </li>
          <li style={{ textAlign: "left" }}>
            Support for 4K resolution and advanced effects.
          </li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "3rem",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
    maxWidth: "500px",
    margin: "0 auto",
    transition: "transform 0.3s ease-in-out",
  },
  sliderContainer: {
    position: "relative",
    width: "100%",
    // maxWidth: "350px",/
    margin: "0 auto",
    overflow: "hidden",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  sliderWrapper: {
    display: "flex",
    transition: "transform 0.5s ease-in-out", // Smooth transition when images change
  },
  sliderImage: {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
  },
  sliderButtonLeft: {
    position: "absolute",
    top: "50%",
    left: "10px",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    fontSize: "24px",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    zIndex: "10",
    transition: "background-color 0.3s ease",
  },
  sliderButtonRight: {
    position: "absolute",
    top: "50%",
    right: "10px",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    fontSize: "24px",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    zIndex: "10",
    transition: "background-color 0.3s ease",
  },
  dotsContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
  dot: {
    width: "10px",
    height: "10px",
    margin: "0 5px",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  productName: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#333",
    margin: "20px 0 10px",
    textTransform: "uppercase",
  },
  productDescription: {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "20px",
    lineHeight: "1.6",
    fontStyle: "italic",
  },
  productPrice: {
    fontSize: "1.6rem",
    color: "#28a745", // Green color for price to signify value
    fontWeight: "bold",
  },
};

export default ProductDetails;
