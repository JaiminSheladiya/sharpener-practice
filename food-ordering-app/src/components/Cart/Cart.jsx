import React from 'react'
import Modal from '../UI/Modal';
import './Cart.css'
const Cart = ({ onClose }) => {
  const cartItems = [{ id: "c1", name: "sushi", amount: 2, price: 12.99 }];
  return (
    <Modal onClose={onClose}>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id} >{item.name}</li>
        ))}
      </ul>
      <div className="total">
        <span>Total Amount</span>
        <span>$ 35.62</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={onClose}>
          Close
        </button>
        <button className="button">Order</button>
      </div>
    </Modal>
  );
};

export default Cart