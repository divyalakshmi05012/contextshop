import React, { useEffect } from 'react';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
    const { cart, setCart, increaseQuantity, decreaseQuantity } = useCart();

    useEffect(() => {
        fetch('/mobiles.json')
            .then(response => response.json())
            .then(data => setCart(data));
    }, [setCart]);

    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalAmount = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

    return (
        <div className='wrapper'>
            <div className='leftside'>
            <h1>Shopping Cart</h1>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>&nbsp;&nbsp;
                        <th>Rating</th>&nbsp;&nbsp;
                        <th>Quantity</th>&nbsp;&nbsp;
                        <th>Subtotal</th>&nbsp;&nbsp;
                        <th>Actions</th>&nbsp;&nbsp;
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => (
                        <tr key={item.id}>
                            <td>
                                <img src={item.thumbnail} alt={item.name || item.title} width="50" />
                                <p>{item.name || item.title}</p>
                            </td>
                            <td>${item.price.toFixed(2)}</td>&nbsp;&nbsp;&nbsp;
                            <td>{item.rating}</td>&nbsp;&nbsp;&nbsp;
                            <td>{item.quantity}</td>&nbsp;&nbsp;
                            <td>${(item.quantity * item.price).toFixed(2)}</td>&nbsp;&nbsp;
                            <td>
                                <button onClick={() => decreaseQuantity(item.id)}>-</button>&nbsp;&nbsp;
                                <button onClick={() => increaseQuantity(item.id)}>+</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table></div>
            <hr></hr>
            <div className='rightside'>
                <h2>Total Quantity: {totalQuantity}</h2>
                <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
            </div>
        </div>
    );
};

export default Cart;
