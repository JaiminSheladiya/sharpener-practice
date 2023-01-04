import React, { useEffect, useState } from 'react'
import CartContext from './cart-context'

const CartProvider = ({ children }) => {
    const [amount , setAmount] = useState(0)
  const [cartItems , setCartItems] = useState([])
  const addItemToCart = (item) => {
    setCartItems([...cartItems, item])
  }  
  const removeItemFromCart = (id) => {
  // console.log(cartItems.filter((el) => el != id));
    setCartItems(cartItems.filter((el) => el.id != id))
  
  }
  const editItem = (item, i) => {
   let newArray =  cartItems.map((el) => {
      if (el.id === item.id)  el.amount = +el.amount + +i
      return el
    })
    setCartItems(newArray)
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
        editItem : editItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider