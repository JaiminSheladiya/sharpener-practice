import React from 'react'
import './ExpenseItem.css'
const ExpenseDetails = ({ title, amount, LocationOfExpenditure }) => {
  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <h2>{LocationOfExpenditure}</h2>
      <div className="expense-item__price">$ {amount}</div>
    </div>
  );
}

export default ExpenseDetails