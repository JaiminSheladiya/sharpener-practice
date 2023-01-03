import React from "react";
import { BsCartCheckFill } from "react-icons/bs";

import "./HeaderCartButton.css";
const HeaderCartButton = () => {
  return (
    <button className="button">
      <span className="icon">
        <BsCartCheckFill style={{height : '20px' , width : '20px'}} />
      </span>
      <span>Your Cart</span>
      <span className="badge">0</span>
    </button>
  );
};

export default HeaderCartButton;
