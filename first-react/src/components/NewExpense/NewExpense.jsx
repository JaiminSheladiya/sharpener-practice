import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = ({ addItem }) => {
  
  return (
    <div className="new-expense">
      <ExpenseForm addItem={addItem} />
    </div>
  );
};

export default NewExpense