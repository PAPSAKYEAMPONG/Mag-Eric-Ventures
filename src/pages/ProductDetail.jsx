import React from 'react';

const ProductDetail = () => {
  const product = {
    name: 'Sample Product',
    brand: 'Brand Name',
    category: 'Biscuits',
    price: 45.99,
    description: 'This is a sample product description. It provides more details about the product, its features, and benefits. This text is a placeholder and should be replaced with actual product information.',
    image: 'https://via.placeholder.com/500'
  };

  return (
    <div className="product-detail-page">
      <div className="product-container">
        {/* Left - Image */}
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>

        {/* Right - Details */}
        <div className="product-info">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-brand">Brand: {product.brand}</p>
          <p className="product-category">Category: {product.category}</p>
          <p className="product-price">
            {new Intl.NumberFormat('en-GH', {
              style: 'currency',
              currency: 'GHS',
            }).format(product.price)}
          </p>

          <p className="product-description">{product.description}</p>

          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>

      {/* Optional Related Products */}
      <div className="related-section">
        <h3>Related Products</h3>
        <div className="related-grid">
          {[...Array(4)].map((_, i) => (
            <div className="related-card" key={i}>
              <img src="https://via.placeholder.com/200" alt="related" />
              <h4>Sample Product</h4>
              <p className="related-price">GHS 35.00</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;