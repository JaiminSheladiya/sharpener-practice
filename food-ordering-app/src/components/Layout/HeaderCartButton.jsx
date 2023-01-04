import React, { useContext } from "react";
import { BsCartCheckFill } from "react-icons/bs";
import CartContext from "../../store/cart-context";

import "./HeaderCartButton.css";
const HeaderCartButton = ({ onClick }) => {
  const {totalAmount,items} = useContext(CartContext
  )
  const numberOfItems = items.reduce((curNumber , item)=>{return curNumber + item.amount},0)
  return (
    <button className="button" onClick={onClick}>
      <span className="icon">
        <BsCartCheckFill style={{ height: "20px", width: "20px" }} />
      </span>
      <span>Your Cart</span>
      <span className="badge">{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
