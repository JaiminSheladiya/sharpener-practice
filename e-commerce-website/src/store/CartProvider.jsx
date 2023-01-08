import axios from "axios";
import React, { useEffect, useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  const [cartItems, setCartItems] = useState([]);
  const userEmail = localStorage.getItem("userEmail");

  const setItems = async () => {
    const res = await axios.get(`https://crudcrud.com/api/8792b3132a154d468627a38c2638bc86/cart${userEmail}`)
    console.log(res)
    setCartItems(res.data)
  }
  useEffect(() => {
    setItems()
  },[])
  
  const addItem = async (item) => {
    const res = await axios.post(
      `https://crudcrud.com/api/8792b3132a154d468627a38c2638bc86/cart${userEmail}`,
      { ...item, quantity : 1}
    );
    console.log(res)
    setItems()
  }

  return (
    <CartContext.Provider value={{ show, setShow ,addItem, cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
