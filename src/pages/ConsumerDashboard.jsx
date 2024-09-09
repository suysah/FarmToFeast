import React, { useState, useEffect } from "react";
import PageNav from "../components/PageNav";
import Button from "../components/Button ";
import styles from "./ConsumerDashboard.module.css";
import ProductList from "../components/ProductList";

const ConsumerDashboard = () => {
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
    <main>
      <PageNav />
      <section className={styles.gridContainer}>
        <div className={styles.consumerDashboardContainer}>
          <h2 className={styles.dashboardHeading}>Suyash Dashboard</h2>
          <div className={styles.userInfo}>
            <img
              src="https://plus.unsplash.com/premium_photo-1671130295823-78f170465794?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhaW5zfGVufDB8fDB8fHww"
              alt="Consumer profile Pic"
            />
            <h2>Suyash Nagar</h2>
            <h3>Suyashnagar813@gmail.comn</h3>
          </div>
          <div className={styles.dashboaedBtn}>
            <Button type="back">your Chat</Button>
            <Button type="back">View Crop Updates</Button>
            <Button type="back">Browse Available Crops</Button>
            <Button type="back">Your Contracts</Button>
          </div>
        </div>
        <div className={styles.consumerAvailableCropContainer}>
          <ProductList />
        </div>
      </section>
    </main>
  );
};

export default ConsumerDashboard;
