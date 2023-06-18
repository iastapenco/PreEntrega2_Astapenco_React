import React from "react";
import Products from "../../components/Products/Products";
import productsList from "../../productsList";

const InicioPage = () => {
  return (
    <div className="product_container">
      <Products products={productsList} />
    </div>
  );
};

export default InicioPage;
