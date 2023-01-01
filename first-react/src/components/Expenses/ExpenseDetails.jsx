import React from 'react'
import './ExpenseItem.css'
const ExpenseDetails = ({ title, amount, LocationOfExpenditure }) => {
  function deleteExpense() {
  console.log('Deleted !') 
 }
  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <h2>{LocationOfExpenditure}</h2>
      <div className="expense-item__price">$ {amount}</div>
      <button onClick={deleteExpense} className="expense-item__price">Delete Expense</button>
    </div>
  );
}

export default ExpenseDetails