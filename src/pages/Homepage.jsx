import React from "react";
import PageNav from "../components/common/PageNav";
import styles from "./HomePage.module.css";

const Home = () => {
  return (
    <>
      <main className={styles.homepage}>
        <PageNav />
        <section>
          <h2>Welcome to Farm2Feast</h2>
          <p>
            Connecting farmers and consumers for a better agricultural
            ecosystem.
          </p>
          <div className="cta">
            <button>
              <a href="/consumer-dashboard">Join as Consumer</a>
            </button>
            <button>
              <a href="/farmer-dashboard">Join as Farmer</a>
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
