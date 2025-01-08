import React from "react";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import PaymentButton from "./components/PaymentButton";

const App = () => {
  const product = {
    name: "Wondershare Filmora 13",
    price: 750, // Price in INR
    image: "https://via.placeholder.com/300", // Replace with your product image URL
  };

  return (
    <div>
      <Header />
      <ProductDetails product={product} />
     
    </div>
  );
};

export default App;
