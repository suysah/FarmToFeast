import React from "react";
import styles from "./ProductCard.module.css";
import btnStyles from "../components/Button.module.css";

const ProductCard = ({ product }) => {
  console.log("from product caerd", product);

  return (
    <main>
      <div className={styles.ProductCard}>
        <div className={styles.productImg}>
          <img src={product.imgURL} alt="grain i" />
        </div>
        <div className={styles.productDetails}>
          <h3>{product.name}</h3>
          <p>
            <span style={{ fontWeight: 600 }}>Type:</span> {product.type}
          </p>
          <p>
            <span style={{ fontWeight: 600 }}>Price:</span> ${product.price}
          </p>
          <p>
            <span style={{ fontWeight: 600 }}>Farmer:</span> {product.farmer}
          </p>
          <p>
            <span style={{ fontWeight: 600 }}>Harvest Date:</span>{" "}
            {new Date(product.harvestDate).toDateString()}
          </p>
          <div className={styles.buttons}>
            <button className={`${btnStyles.btn}`}>Pre-book</button>
            <button className={`${btnStyles.btn}`}>Details</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductCard;
