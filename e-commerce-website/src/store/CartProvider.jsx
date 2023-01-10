import axios from "axios";
import React, { useEffect, useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("idToken"));
  const [cartItems, setCartItems] = useState([]);
  const [userEmail, setUserEmail] = useState(UE)
  var addItem = () => {};
  var setItems = ()=>{}

    //  const url = `https://crudcrud.com/api/392c07033d4d402c90308ef49ebd8a65/cart${
    //    userEmail.split("@")[0]
    //  }`;

  var deleteItem = async (id) => {
    const url = `https://crudcrud.com/api/392c07033d4d402c90308ef49ebd8a65/cart${
      localStorage.getItem("userEmail").split("@")[0]
      }`
      const res = await axios.delete(`${url}/${id}`);
    setItems()
  }
  
  var setItems = async () => {
      const url = `https://crudcrud.com/api/392c07033d4d402c90308ef49ebd8a65/cart${
        localStorage.getItem("userEmail").split("@")[0]
      }`;
       const res = await axios.get(url);
       setCartItems(res.data);
    };
  var addItem = async (item) => {
      const url = `https://crudcrud.com/api/392c07033d4d402c90308ef49ebd8a65/cart${
        localStorage.getItem("userEmail").split("@")[0]
      }`;
    
      const res = await axios.post(url, { ...item, quantity: 1 });
      setItems(localStorage.getItem("userEmail"));
    };
  var UE = null;

  useEffect(() => {
    setItems()
  }, [token]);

  return (
    <CartContext.Provider
      value={{
        setToken,
        token,
        show,
        setShow,
        addItem,
        cartItems,
        setCartItems,
        setUserEmail,
        deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
