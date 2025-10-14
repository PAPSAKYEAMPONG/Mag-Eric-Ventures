import { useState, useEffect } from 'react';
import "../main.css";
import flaxseed from '../assets/flaxseed.jpg';
import kreteaz from '../assets/kreteaz.jpg';
import Avocadooil from '../assets/avocadooil.jpg';
import olaycoconutoil from '../assets/olaycoconutoil.jpg';
import pepper from '../assets/pepper.jpg';
import garlicherb from '../assets/garlicherb.jpg';
import irishspring from '../assets/irishspring.jpg';
import softner from '../assets/softner.jpg';
import Nescafe from '../assets/Nescafe.jpg';
import biscuitsImg from '../assets/Digestive.jpg';
import cerealsImg from '../assets/snowflakes.jpg';
import drinksImg from '../assets/caprisun.png';
import toiletriesImg from '../assets/olayvitaminc.jpg';
import householdImg from '../assets/softner.jpg';
import product1 from '../assets/Oreo.jpg';
import product2 from '../assets/nutella copy.jpg';
import product3 from '../assets/snowflakes copy.jpg';
import product4 from '../assets/Pringles.jpg';

const images = [kreteaz, flaxseed, Avocadooil, olaycoconutoil, pepper, garlicherb, irishspring, softner, Nescafe];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>
          Welcome to <br></br> <span>Mag-Eric Ventures</span>
        </h1>
        <p>
          Your trusted UK-to-Ghana store <br></br>Premium biscuits, breakfast cereals,
          body essentials, and household products all at affordable prices.
        </p>
        <button className="shop-btn">Shop Now</button>
      </div>

      <div
        className="hero-image"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      ></div>
      </section>
      
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <div className="category-card">
            <img src={biscuitsImg} alt="Biscuits & Snacks" />
            <h3>Biscuits & Snacks</h3>
          </div>

          <div className="category-card">
            <img src={cerealsImg} alt="Breakfast Cereals" />
            <h3>Breakfast Cereals</h3>
          </div>

          <div className="category-card">
            <img src={drinksImg} alt="Drinks & Beverages" />
            <h3>Drinks & Beverages</h3>
          </div>

          <div className="category-card">
            <img src={toiletriesImg} alt="Body & Toiletries" />
            <h3>Body & Toiletries</h3>
          </div>

          <div className="category-card">
            <img src={householdImg} alt="Household Essentials" />
            <h3>Household Essentials</h3>
          </div>
        </div>
      </section>
      {/* Featured Products */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src={product1} alt="Oreo" />
            <h3>Oreo Biscuits</h3>
            <p>GHS 25.00</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src={product2} alt="Nutella" />
            <h3>Nutella Spread</h3>
            <p>GHS 45.00</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src={product3} alt="Cereal" />
            <h3>Breakfast Cereal</h3>
            <p>GHS 35.00</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src={product4} alt="Welchi" />
            <h3>Pringles</h3>
            <p>GHS 15.00</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src={product4} alt="Welchi" />
            <h3>Pringles</h3>
            <p>GHS 15.00</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src={product4} alt="Welchi" />
            <h3>Pringles</h3>
            <p>GHS 15.00</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src={product4} alt="Welchi" />
            <h3>Pringles</h3>
            <p>GHS 15.00</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src={product4} alt="Welchi" />
            <h3>Pringles</h3>
            <p>GHS 15.00</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </section>


      {/* Why Shop With Us */}
<section className="why-shop">
  <h2>Why Shop With Us</h2>
  <div className="value-grid">
    <div className="value-card">
      <i className="fas fa-box-open"></i>
      <h3>Genuine UK Imports</h3>
      <p>
        Top quality and authenticity
        in every product.
      </p>
    </div>

    <div className="value-card">
      <i className="fas fa-shipping-fast"></i>
      <h3>Fast Delivery</h3>
      <p>
        Get your items quickly, wherever you are in Ghana. <br></br>Our delivery is reliable and secure.
      </p>
    </div>

    <div className="value-card">
      <i className="fas fa-tags"></i>
      <h3>Affordable Prices</h3>
      <p>
        Enjoy premium UK products at pocket-friendly prices<br></br>No hidden charges or surprises.
      </p>
    </div>

    <div className="value-card">
      <i className="fas fa-headset"></i>
      <h3>Customer Support</h3>
      <p>
        We’re here for you! Our support team is ready to assist with any inquiries or issues.
      </p>
    </div>
  </div>
</section>

{/* Newsletter Signup */}
<section className="newsletter">
  <h2>Stay Updated</h2>
  <p>Subscribe to our newsletter for the latest deals and updates.</p>
  <div className="newsletter-form">
    <input type="email" placeholder="Enter your email" />
    <button>Subscribe</button>
  </div>
</section>

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

export default Home;