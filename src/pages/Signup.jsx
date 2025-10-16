import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Create Account</h2>
        <p className="auth-subtitle">Join our community</p>

        <form className="auth-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" required />
          </div>

          <button type="submit" className="auth-btn">Sign Up</button>

          <p className="auth-footer">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;