import React, { useCallback } from "react";
import "./card.css";

const Card = ({ product, onAddToCart, onRemoveItem }) => {
  const handleAddToCart = useCallback(() => {
    onAddToCart(product);
  }, [onAddToCart, product]);

  const handleRemoveItem = useCallback(() => {
    onRemoveItem(product);
  }, [onRemoveItem, product]);

  const  { title = "", image = "", price = 0 } = product;
  
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
      <button onClick={handleAddToCart}>Add To Cart</button>
      <button onClick={handleRemoveItem}>Remove Item</button>
    </div>
  );
};

export default Card;
