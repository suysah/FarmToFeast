import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  console.log("from product caerd", product);

  return (
    <div className={styles.ProductCard}>
      <img src={product.imgURL} alt="grain i" />
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
