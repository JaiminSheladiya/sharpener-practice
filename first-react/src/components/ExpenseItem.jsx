import React from "react";
import "./ExpenseItem.css";
const ExpenseItem = ({title , amount , date , LocationOfExpenditure}) => {
  return (
    <div className="expense-item">
      <div>{date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <h2>{LocationOfExpenditure}</h2>
        <div className="expense-item__price">$ {amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
