import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Type: {product.type}</p>
      <p>Price: ${product.price}</p>
      <p>Farmer: {product.farmer}</p>
      <p>Harvest Date: {new Date(product.harvestDate).toDateString()}</p>
      <button>Pre-book</button>
    </div>
  );
};

export default ProductCard;
