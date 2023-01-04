import React, { useContext } from "react";
import { MdShoppingCart } from "react-icons/md";
import CartContext from "../../store/cart-context";

import "./HeaderCartButton.css";
const HeaderCartButton = ({ onClick }) => {
  const {totalAmount,items} = useContext(CartContext
  )
  const numberOfItems = items.reduce((curNumber , item)=>{return curNumber + +(item.amount)},0)
  return (
    <button className="button" onClick={onClick}>
      <span className="icon">
        <MdShoppingCart style={{ height: "25px", width: "25px" }} />
      </span>
      <span className="badge">{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
