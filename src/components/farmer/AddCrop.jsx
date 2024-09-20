import React, { useState } from "react";
import styles from "./AddCrop.module.css";
import Button from "../ui/Button ";

const AddCrop = ({ userId }) => {
  const [newProduct, setNewProduct] = useState({
    id: toString(Date.now()), // Use a timestamp or leave the server to handle the ID generation
    image: "",
    name: "",
    type: "",
    price: "",
    harvestDate: "",
    detail: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add new product to the products list
    const res = await fetch("http://localhost:8000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });
    if (res.ok) {
      console.log("Data posted successfully");
    }

    // Fetch the farmer data to update crops
    const response = await fetch("http://localhost:8000/Farmer");
    const data = await response.json();
    const farmer = data.find((farmer) => farmer.id === userId);

    if (farmer) {
      const updatedCrops = [...farmer.crops, newProduct];

      const patchRes = await fetch(`http://localhost:8000/Farmer/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          crops: updatedCrops,
        }),
      });

      if (patchRes.ok) {
        console.log("Crop added successfully!");
      } else {
        console.error("Failed to add crop");
      }
    } else {
      console.error("Farmer not found");
    }

    // Reset the form after submission
    setNewProduct({
      id: Date.now(),
      image: "",
      name: "",
      type: "",
      price: "",
      harvestDate: "",
      detail: "",
    });
  };

  return (
    <main className={styles.mainContainer}>
      <div className={styles.farmerDashboard}>
        <h1>Add New Crop</h1>
        <div className={styles.cropAddForm}>
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
              name="image"
              placeholder="Crop image URL"
              value={newProduct.image}
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
            <textarea
              type="text"
              name="detail"
              placeholder="Detail"
              value={newProduct.detail}
              onChange={handleInputChange}
              required
            />
            <Button type="primary">Add Crop</Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddCrop;
