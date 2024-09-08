import React from "react";
import PageNav from "../components/PageNav";
import ProductList from "../components/ProductList";

const ProductPage = () => {
  return (
    <main>
      <PageNav />
      <section>
        <ProductList />
      </section>
    </main>
  );
};

export default ProductPage;
