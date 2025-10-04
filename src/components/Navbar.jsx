import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './main.css';

const Navbar = ({ user, handleLogout, cartItems, searchQuery, setSearchQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Accra Fashion Logo" />
        <h1>Accra Fashion</h1>
      </div>

      <div className="hamburger" onClick={handleToggleMenu}>
        <span>{isMenuOpen ? "✕" : "☰"}</span>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart" className="cart-icon">
          🛒
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
          )}
        </Link>
      </div>

      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="navbar-auth">
        {user ? (
          <>
            <span className="greeting" style={{ padding: "10px" }}>
              Hi, {user.displayName || "Guest"}
            </span>
            <Link to="/account" className="account-link" onClick={closeMenu}>Account</Link>
            <button className="logout" onClick={() => { closeMenu(); handleLogout(); }}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="login" onClick={closeMenu}>Login</Link>
            <Link to="/signup" className="signup" onClick={closeMenu}>Sign Up</Link>
          </>
        )}
      </div>

      <div className={`mobile-drawer ${isMenuOpen ? "open" : ""}`}>
        <div className="navbar-logoDrawer">
          <img src={logo} alt="Accra Fashion Logo" />
        </div>

        <div className="mobile-search">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/shop" onClick={closeMenu}>Shop</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
        <Link to="/cart" onClick={closeMenu} className="cart-icon">
          🛒 Cart
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
          )}
        </Link>

        {user ? (
          <>
            <span className="greeting" style={{ padding: "10px" }}>
              Hi, {user.displayName || "Guest"}
            </span>
            <Link to="/account" className="account-link" onClick={closeMenu}>Account</Link>
            <button className="logout" onClick={() => { closeMenu(); handleLogout(); }}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="login" onClick={closeMenu}>Login</Link>
            <Link to="/signup" className="signup" onClick={closeMenu}>Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;