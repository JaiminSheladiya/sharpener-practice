import React, { useContext } from 'react'
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import './Cart.css'
const Cart = ({ onClose }) => {
  const { items, totalAmount, editItem ,removeItem} = useContext(CartContext);
  console.log(items)

  return (
    <Modal onClose={onClose}>
      <ul className="cart-items">
        {items.map((item) => (
          <div key={item.id} className="items">
            <div>
              <h4>{item.title}</h4>
              <h4 style={{ marginLeft: "20px" }}>x {item.amount}</h4>
            </div>
            <div>
              <h4>Price : $ {(item.price * item.amount).toFixed(2)}</h4>
            </div>
            <div id='buttons'>
              {<button onClick={() => removeItem(item.id)}>REMOVE</button>}
              {item.amount > 1 && (
                <button
                  disabled={item.amount == 1}
                  onClick={() => {
                    editItem(item, -1);
                  }}
                >
                  -
                </button>
              )}
              {item.amount < 5 && (
                <button
                  onClick={() => {
                    editItem(item, 1);
                  }}
                >
                  +
                </button>
              )}
            </div>
          </div>
        ))}
      </ul>
      <div className="total">
        <span>Total Amount</span>
        <span>$ {totalAmount}</span>
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