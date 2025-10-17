import React from 'react';

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          {/* Company Info */}
          <div className="footer-about">
            <h3>Mag-Eric Ventures</h3>
            <p>
              Your trusted UK-to-Ghana online store — bringing you premium biscuits, cereals,
              drinks, toiletries, and household essentials at unbeatable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p><i className="fas fa-phone"></i> +233 50 123 4567</p>
            <p><i className="fas fa-envelope"></i> info@magericventures.com</p>
            <p><i className="fas fa-map-marker-alt"></i> Accra, Ghana</p>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Mag-Eric Ventures. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;