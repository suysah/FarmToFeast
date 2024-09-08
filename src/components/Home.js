import React from "react";

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to AgriPlatform</h2>
      <p>
        Connecting farmers and consumers for a better agricultural ecosystem.
      </p>
      <div className="cta">
        <button>
          <a href="/consumer-dashboard">Join as Consumer</a>
        </button>
        <button>
          <a href="/farmer-dashboard">Join as Farmer</a>
        </button>
      </div>
    </div>
  );
};

export default Home;
