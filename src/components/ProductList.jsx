import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";
import Button from "./Button ";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch("http://localhost:8000/products");
        if (!res.ok) {
          throw new Error("Error while Fetching data");
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  }, []);

  return (
    <div className={styles.ProductList}>
      <h1>Available Products</h1>

      <div className={styles.cardContainer}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product}>
            <Button type="primary">Book</Button>
            <Button type="primary">Details</Button>
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
