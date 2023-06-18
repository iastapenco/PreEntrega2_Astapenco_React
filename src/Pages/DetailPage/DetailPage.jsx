import React from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/Products/Product";
import productsList from "../../productsList";
import "./DetailPage.css";

const DetailPage = () => {
  let { id } = useParams();
  const product = productsList.find((p) => p.id == id);
  return (
    <div className="detalle">
      {product ? (
        <Product
          key={product.id}
          name={product.name}
          img={product.img}
          precio={product.precio}
          cantidad={product.cantidad}
        />
      ) : null}
    </div>
  );
};

export default DetailPage;
