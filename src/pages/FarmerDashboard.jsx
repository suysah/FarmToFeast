import React from "react";
import PageNav from "../components/PageNav";
import styles from "./FarmerDashboard.module.css";
import { NavLink, Outlet } from "react-router-dom";

const FarmerDashboard = () => {
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
                  <NavLink to="contracts">Your Conracts</NavLink>
                </li>
                <li>
                  <NavLink to="farmerConnect">farmer Connect</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className={styles.consumerAvailableCropContainer}>
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default FarmerDashboard;
