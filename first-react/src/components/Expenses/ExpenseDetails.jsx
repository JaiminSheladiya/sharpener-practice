import React, { useState } from 'react'
import './ExpenseItem.css'
const ExpenseDetails = ({
  title,
  amount,
  LocationOfExpenditure,
  deleteItem,
  id
}) => {

  const [expense,setExpense] = useState(amount)


  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <h2>{LocationOfExpenditure}</h2>
      <div className="expense-item__price">$ {expense}</div>
      <button
        onClick={() => setExpense((prev) => prev + 100)}
        className="expense-item__price"
      >
        ADD 100
      </button>
      <button onClick={() => deleteItem(id)} className="expense-item__price">
        Delete Expense
      </button>
    </div>
  );
};

export default ExpenseDetails