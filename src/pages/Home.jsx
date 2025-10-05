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
    </>
  );
};

export default Home;