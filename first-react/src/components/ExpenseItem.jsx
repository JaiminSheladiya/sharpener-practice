import React from 'react'
import Expense from './Expense'

const ExpenseItem = () => {
  return (
    <>
      <h2>Expense Item</h2>
      <Expense item={["Food", 10]} />
      <Expense item={["Petrol", 100]} />
      <Expense item={["Movies", 200]} />
    </>
  );
}

export default ExpenseItem