import React, { useState } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
import "./products.css";

const Products = ({ products }) => {
  return (
    <div className="card_container">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link className="links" to={`/product/${product.id}`}>
              <Product
                key={product.id}
                name={product.name}
                img={product.img}
                precio={product.precio}
                cantidad={product.cantidad}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
