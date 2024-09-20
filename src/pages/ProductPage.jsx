import React from "react";
import PageNav from "../components/common/PageNav";
import ProductList from "../components/common/ProductList";

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
