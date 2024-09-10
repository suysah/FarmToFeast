import React, { useState } from "react";
import styles from "../components/AddCrop.module.css";

const AddCrop = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    type: "",
    price: "",
    harvestDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit product to backend
    fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts([...products, data]);
        setNewProduct({ name: "", type: "", price: "", harvestDate: "" });
      });
  };

  return (
    <main className={styles.mainContainer}>
      {" "}
      <div className={styles.farmerDashboard}>
        <h2>Farmer Dashboard</h2>
        <h3>Add New Crop</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Crop Name"
            value={newProduct.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="type"
            placeholder="Type (Organic/Conventional)"
            value={newProduct.type}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={newProduct.price}
            onChange={handleInputChange}
            required
          />
          <input
            type="date"
            name="harvestDate"
            placeholder="Harvest Date"
            value={newProduct.harvestDate}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Add Crop</button>
        </form>

        <h3>Your Crops</h3>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - {product.type} - ${product.price} -{" "}
              {new Date(product.harvestDate).toDateString()}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default AddCrop;
