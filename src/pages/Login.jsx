import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Welcome Back</h2>
        <p className="auth-subtitle">Login to your account</p>

        <form className="auth-form">
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>

          <button type="submit" className="auth-btn">Login</button>

          <p className="auth-footer">
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;