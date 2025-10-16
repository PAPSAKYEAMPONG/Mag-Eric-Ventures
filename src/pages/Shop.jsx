import React from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  return (
    <div className="shop-page">
      <h2 className="shop-title">Shop All Products</h2>

      <div className="category-filters">
        {['All', 'Biscuits', 'Cereals', 'Baby Products', 'Body Care', 'Drinks', 'Household'].map(category => (
          <button
            key={category}
            className="filter-btn"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {[...Array(8)].map((_, i) => (
          <Link to={`/product/${i}`} className="product-card" key={i}>
            <img src="https://via.placeholder.com/300" alt="Product" />
            <h3>Sample Product Name</h3>
            <p className="price">GHS 45.99</p>
            <p className="category">Biscuits</p>
          </Link>
        ))}
      </div>

      <div className="pagination-buttons">
        <button>Previous</button>
        <span>Page 1 of 5</span>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Shop;