import React from "react";
import Products from "../../components/Products/Products";
import productsList from "../../productsList";
import ListItemContainer from "../../components/ListItemContainer/ListItemContainer";

const InicioPage = () => {
  return (
    <div>
      <ListItemContainer userName="Pedro" greetings="Bienvenido nuevamente" />
      <div className="product_container">
        <Products products={productsList} />
      </div>
    </div>
  );
};

export default InicioPage;
