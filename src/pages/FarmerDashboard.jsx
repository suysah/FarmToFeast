import React, { useEffect, useState } from "react";
import PageNav from "../components/PageNav";
import styles from "./FarmerDashboard.module.css";
import { NavLink, Outlet } from "react-router-dom";
import Spinner from "../components/Spinner";

// const userId = 101;

const FarmerDashboard = ({ userId }) => {
  const [farmerInfo, setFarmerInfo] = useState(null);

  useEffect(
    function () {
      async function fetchData() {
        try {
          const res = await fetch("http://localhost:8000/Farmer");
          const data = await res.json();

          const farmer = data.find((farmer) => farmer.id === userId);

          if (farmer) {
            setFarmerInfo(farmer);
          }
          console.log(farmer);
        } catch (error) {
          console.error("Error fetching farmer data:", error);
        }
      }
      fetchData();
    },
    [userId]
  );

  // console.log("url", farmerInfo.imgURL);

  return (
    <main>
      <PageNav />
      <section className={styles.gridContainer}>
        <div className={styles.consumerDashboardContainer}>
          <h2 className={styles.dashboardHeading}>Suyash Dashboard</h2>
          <div className={styles.userInfo}>
            {farmerInfo ? (
              <>
                <img
                  src="https://plus.unsplash.com/premium_photo-1671130295823-78f170465794?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhaW5zfGVufDB8fDB8fHww"
                  alt="Consumer profile Pic"
                />
                <h2>{farmerInfo.name}</h2>
                <h3>{farmerInfo.email}</h3>
              </>
            ) : (
              <Spinner />
            )}
          </div>
          <div className={styles.dashboaedBtn}>
            <nav className={styles.nav}>
              <ul>
                <li>
                  <NavLink to="chat">My Chat</NavLink>
                </li>
                <li>
                  <NavLink to="myCrop">My Crop</NavLink>
                </li>
                <li>
                  <NavLink to="addCrop">Add Crop</NavLink>
                </li>
                <li>
                  <NavLink to="contracts">Your Contracts</NavLink>
                </li>
                <li>
                  <NavLink to="farmerConnect">Farmer Connect</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className={styles.consumerAvailableCropContainer}>
          <Outlet context={farmerInfo} />
        </div>
      </section>
    </main>
  );
};

export default FarmerDashboard;
