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
  );
};

export default Home;