import React, { useState, useEffect } from "react";

const ConsumerDashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from backend
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="consumer-dashboard">
      <h2>Your Dashboard</h2>
      <h3>Available Crops</h3>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Farmer</th>
            <th>Price</th>
            <th>Type</th>
            <th>Harvest Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.farmer}</td>
              <td>{product.price}</td>
              <td>{product.type}</td>
              <td>{new Date(product.harvestDate).toDateString()}</td>
              <td>
                <button>Pre-book</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConsumerDashboard;
