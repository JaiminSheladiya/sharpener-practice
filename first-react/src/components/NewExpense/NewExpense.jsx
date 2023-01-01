import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = ({ addItem ,setShow}) => {
  
  return (
    <div className="new-expense">
      <ExpenseForm addItem={addItem} setShow={setShow} />
    </div>
  );
};

export default NewExpense