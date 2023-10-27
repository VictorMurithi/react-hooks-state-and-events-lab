import React from "react";
import {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)

  const handleAddCart = () => {
    setInCart(!inCart)
  }
  return (
    <li className={inCart ? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddCart}>{inCart ? "Remove from cart":"Add to cart"}</button>
    </li>
  );
}

export default Item;
