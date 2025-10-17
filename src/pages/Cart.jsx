import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = []; // Replace with your actual cart items
  const total = 0; // Replace with your actual total

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/shop" className="continue-shopping">Continue Shopping</Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.imageURL} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="price">
                    {new Intl.NumberFormat('en-GH', {
                      style: 'currency',
                      currency: 'GHS',
                    }).format(item.price)}
                  </p>
                  <div className="quantity">
                    <button>-</button>
                    <span>{item.quantity}</span>
                    <button>+</button>
                  </div>
                </div>
                <button className="remove-btn">Remove</button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>
                {new Intl.NumberFormat('en-GH', {
                  style: 'currency',
                  currency: 'GHS',
                }).format(total)}
              </span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <hr />
            <div className="summary-row total">
              <span>Total</span>
              <span>
                {new Intl.NumberFormat('en-GH', {
                  style: 'currency',
                  currency: 'GHS',
                }).format(total)}
              </span>
            </div>

            <button className="checkout-btn">Proceed to Checkout</button>
            <Link to="/shop" className="continue-link">Continue Shopping</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;