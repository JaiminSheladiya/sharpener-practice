import React from "react";
import CartIcon from "../Cart/CartIcon";
import './HeaderCartButton.css'
const HeaderCartButton = () => {
  return (
    <button className='button'>
          <span className='icon'>
              <CartIcon />
      </span>
      <span>Your Cart</span>
          <spa className='badge'>0</spa>
    </button>
  );
};

export default HeaderCartButton;
