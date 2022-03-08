import React from "react";
import Card from "./Card";
import "./searchedData.css";

const ProductList = ({ products = [], onAddToCart, onRemoveItem }) => {
  return (
    <div className="mainBody">
      {products.map((product) => {
        const { id } = product;
        return <Card key={id} product={product} onAddToCart={onAddToCart} onRemoveItem={onRemoveItem} />;
      })}
    </div>
  );
};

export default ProductList;
