// src/App.js
import React from 'react';
import { CartProvider } from './contexts/CartContext';
import Cart from './contexts/Cart';

const App = () => {
    return (
        <CartProvider>
            <Cart />
        </CartProvider>
    );
};

export default App;
