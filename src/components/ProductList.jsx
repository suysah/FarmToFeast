import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from backend
    async function fetchProduct() {
      try {
        const res = await fetch("http://localhost:8000/products");
        if (!res.ok) {
          throw new Error("Error while Fetching data");
        }
        const data = await res.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  }, []);

  return (
    <div className={styles.productPage}>
      <h1 className={styles.heading}>Available Products</h1>
      <div className={styles.ProductList}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
