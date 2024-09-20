import { useEffect, useState } from "react";
import styles from "./MyCrop.module.css";
import Button from "../ui/Button ";
import ProductCard from "../common/ProductCard";
import { useOutletContext } from "react-router-dom";

const MyCrops = ({ userId }) => {
  const [products, setProducts] = useState([]);
  const farmerInfo = useOutletContext();

  useEffect(() => {
    if (farmerInfo && farmerInfo.crops) {
      setProducts(farmerInfo.crops);
    }
  }, []);

  async function handleDelete(id) {
    try {
      const response = await fetch(`http://localhost:8000/products/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log(`Product with id ${id} deleted successfully.`);
      } else {
        console.error(`Failed to delete product with id ${id}`);
      }
    } catch (error) {
      console.error("Error deleting the product:", error);
    }

    const newProductList = products.filter((product) => product.id !== id);

    try {
      const patchRes = await fetch(`http://localhost:8000/Farmer/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          crops: newProductList,
        }),
      });

      if (patchRes.ok) {
        setProducts(newProductList);
        console.log("Crop removed from farmer's crop list successfully.");
      } else {
        console.error("Failed to update farmer's crops.");
      }
    } catch (error) {
      console.error("Error during PATCH request:", error);
    }
  }

  return (
    <main className={styles.mainContainer}>
      <h3>Your Crops</h3>
      <div className={styles.listContainer}>
        <ul>
          {products.map((product) => (
            <ProductCard key={product.id} product={product}>
              <Button type="primary">Update</Button>
              <Button type="primary">Details</Button>
              <Button type="primary" onClick={() => handleDelete(product.id)}>
                Delete
              </Button>
            </ProductCard>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default MyCrops;
