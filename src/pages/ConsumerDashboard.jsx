import React, { useEffect, useState } from "react";
import PageNav from "../components/PageNav";
import styles from "./ConsumerDashboard.module.css";
import { NavLink, Outlet } from "react-router-dom";
import Spinner from "../components/Spinner";

const ConsumerDashboard = () => {
  const [consumerInfo, setConsumerInfo] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:8000/consumer");
        const data = await res.json();

        setConsumerInfo(data[0]); // Assuming data is an array and you're taking the first element
        console.log(data[0]);
      } catch (error) {
        console.error("Error fetching farmer data:", error);
      }
    }
    fetchData();
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
            {consumerInfo ? (
              <>
                <h2>{consumerInfo.name}</h2>
                <h3>{consumerInfo.email}</h3>
              </>
            ) : (
              <Spinner />
            )}
          </div>
          <div className={styles.dashboaedBtn}>
            <nav className={styles.nav}>
              <ul>
                <li>
                  <NavLink to="chat">Your Chat</NavLink>
                </li>
                <li>
                  <NavLink to="cropUpdates">View Crop Updates</NavLink>
                </li>
                <li>
                  <NavLink to="products">Browse Available Crops</NavLink>
                </li>

                <li>
                  <NavLink to="contracts">Your Conracts</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className={styles.consumerAvailableCropContainer}>
          <Outlet context={consumerInfo} />
        </div>
      </section>
    </main>
  );
};

export default ConsumerDashboard;
