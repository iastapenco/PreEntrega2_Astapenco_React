import React from "react";
import "./product.css";

const Product = (props) => {
  return (
    <div>
      <img className="img_product" src={props.img} />
      <h1>{props.name}</h1>
      <p>
        {props.cantidad} | {props.precio}
      </p>
    </div>
  );
};

export default Product;
