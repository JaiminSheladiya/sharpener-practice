import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => setCartItems((prev) => [...prev, {...item , quantity : 1}]);
  return (
    <CartContext.Provider value={{ show, setShow ,addItem, cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
