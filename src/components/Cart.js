// src/components/Cart.js
import React from 'react';

const Cart = () => {
    // Replace with actual cart data and fetching logic
    const cartItems = [
        { id: 1, name: 'Product 1', quantity: 2, price: '$10' },
    ];

    return (
        <div>
            <h1>Shopping Cart</h1>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        {item.name} - {item.quantity} x {item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
