import React from "react";
import Card from "./Card";
import "./searchedData.css";

const ProductList = ({ products = [], onAddToCart }) => {
  return (
    <div className="mainBody">
      {products.map(({ id, ...product }) => {
        return <Card key={id} product={product} onAddToCart={onAddToCart} />;
      })}
    </div>
  );
};

export default ProductList;
