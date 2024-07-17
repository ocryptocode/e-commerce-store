// src/components/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    // Replace with actual product data and fetching logic
    const product = { id, name: `Product ${id}`, price: `$${id * 10}` };

    return (
        <div>
            <h1>Product Detail</h1>
            <p>{product.name}</p>
            <p>{product.price}</p>
        </div>
    );
};

export default ProductDetail;
