import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const cartItems = [];
  const subtotal = 0;
  const shipping = 0;
  const total = 0;

  return (
    <div className="checkout-page">
      <h2 className="checkout-title">Checkout</h2>

      <div className="checkout-content">
        {/* LEFT - SHIPPING FORM */}
        <div className="checkout-form">
          <h3>Shipping Information</h3>

          <form>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" required />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="example@email.com" required />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="e.g. 0541234567" required />
            </div>

            <div className="form-group">
              <label>Delivery Address</label>
              <textarea placeholder="House number, street, area" rows="3" required></textarea>
            </div>

            <div className="form-group">
              <label>City / Town</label>
              <input type="text" placeholder="e.g. Accra" required />
            </div>

            <div className="form-group">
              <label>Payment Method</label>
              <select required>
                <option value="">Select payment method</option>
                <option>Mobile Money</option>
                <option>Cash on Delivery</option>
                <option>Credit/Debit Card</option>
              </select>
            </div>

            <button type="submit" className="place-order-btn">Place Order</button>
          </form>

          <Link to="/cart" className="back-to-cart">← Back to Cart</Link>
        </div>

        {/* RIGHT - ORDER SUMMARY */}
        <div className="order-summary">
          <h3>Order Summary</h3>

          <div className="summary-items">
            {cartItems.map(item => (
              <div className="summary-item" key={item.id}>
                <img src={item.imageURL} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <small>Qty: {item.quantity}</small>
                </div>
                <span>
                  {new Intl.NumberFormat('en-GH', {
                    style: 'currency',
                    currency: 'GHS',
                  }).format(item.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>

          <hr />

          <div className="summary-row">
            <span>Subtotal</span>
            <span>GHS {subtotal.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>GHS {shipping.toFixed(2)}</span>
          </div>

          <div className="summary-row total">
            <span>Total</span>
            <span>GHS {total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;