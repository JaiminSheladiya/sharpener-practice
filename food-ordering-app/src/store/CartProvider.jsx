import React from 'react'
import CartContext from './cart-context'

const CartProvider = ({ children }) => {
    const addItemToCart = (item)=> {

    }
    const removeItemFromCart = (id) => {
        
    }
  return (
    <CartContext.Provider
      value={{
        items: [],
        totalAmount: 0,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider