import React from 'react'
import Header from './Header';
import ProductDetails from './ProductDetails';

const Dashboard = () => {
    const product = {
        name: "Wondershare Filmora 13",
        price: 650, // Price in INR
        image: "https://via.placeholder.com/300", // Replace with your product image URL
    };
    return (
        <> <Header />
            <ProductDetails product={product} /></>
    )
}

export default Dashboard