import React, { useEffect, useState } from 'react'
import CartContext from './cart-context'

const CartProvider = ({ children }) => {
    const [amount , setAmount] = useState(0)
  const [cartItems , setCartItems] = useState([])
  const addItemToCart = (item) => {
    setCartItems([...cartItems, item])
  }  
    const removeItemFromCart = (id) => {
        setCartItems(cartItems.filter((el)=>el!=id))
  }
  
  useEffect(() => {
     setAmount(cartItems.reduce((acc, curr) => acc + (curr.price * curr.amount), 0).toFixed(2))
  }, [cartItems])
  
  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        totalAmount: amount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
        setCartItems: setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider