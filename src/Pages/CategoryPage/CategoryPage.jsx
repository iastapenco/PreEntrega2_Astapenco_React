import React from "react";
import { useParams } from "react-router-dom";
import Products from "../../components/Products/Products";
import productsList from "../../productsList";

const CategoryPage = () => {
  let { categoryId } = useParams();
  const productsByCategory = productsList.filter(
    (p) => p.category === categoryId
  );
  return (
    <div>
      <Products products={productsByCategory} />
    </div>
  );
};

export default CategoryPage;
