import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
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


<section className="feel-good-section">
  <div className="feel-good-overlay"></div>

  <div className="feel-good-content">
    <h2>Let’s Make Your Day Brighter</h2>
    <p>
      At Mag-Eric Ventures, every product is chosen to bring a little joy to your everyday life.
      From tasty biscuits and creamy spreads to your trusted home essentials — we’re here to make
      your days smoother, happier, and more satisfying.
    </p>

    <div className="feel-good-highlights">
      <div className="highlight">
        <i className="fas fa-cookie-bite"></i>
        <span>Delicious Treats</span>
      </div>
      <div className="highlight">
        <i className="fas fa-bath"></i>
        <span>Everyday Essentials</span>
      </div>
      <div className="highlight">
        <i className="fas fa-smile-beam"></i>
        <span>Joy Guaranteed</span>
      </div>
    </div>

    <button className="shop-happiness-btn" onClick={() => navigate('/shop')}>
      Shop Happiness
    </button>
  </div>
</section>

      {/* Why Shop With Us */}
<section className="why-shop"> 
   <div className="why-shop-header"> 
     <h2>Why Shop With Us</h2> 
     <p>Your trusted source for genuine UK goods — delivered fast, priced right, and handled with care.</p> 
   </div> 
 
   <div className="value-grid"> 
     <div className="value-card"> 
       <div className="icon-circle"> 
         <i className="fas fa-box-open"></i> 
       </div> 
       <h3>Genuine UK Imports</h3> 
       <p>Every item is sourced directly from the UK to guarantee quality and authenticity you can trust.</p> 
     </div> 
 
     <div className="value-card"> 
       <div className="icon-circle"> 
         <i className="fas fa-shipping-fast"></i> 
       </div> 
       <h3>Fast Delivery</h3> 
       <p>We deliver across Ghana — safe, quick, and right to your doorstep, so you never have to wait long.</p> 
     </div> 
 
     <div className="value-card"> 
       <div className="icon-circle"> 
         <i className="fas fa-tags"></i> 
       </div> 
       <h3>Affordable Prices</h3> 
       <p>Shop premium UK brands at fair, transparent prices — no hidden fees or extra costs, ever.</p> 
     </div> 
 
     <div className="value-card"> 
       <div className="icon-circle"> 
         <i className="fas fa-headset"></i> 
       </div> 
       <h3>24/7 Customer Support</h3> 
       <p>Need help? Our team is always ready to assist, ensuring your shopping experience stays smooth.</p> 
     </div> 
   </div> 
 
   <div className="why-shop-cta"> 
     <button onClick={() => navigate('/shop')}>Start Shopping</button> 
   </div> 
 </section>




    </>
  );
};

export default Home;