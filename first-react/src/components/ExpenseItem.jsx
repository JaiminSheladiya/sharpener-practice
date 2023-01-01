import React from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
const ExpenseItem = ({ title, amount, date, LocationOfExpenditure }) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <ExpenseDetails title={title} amount={amount} LocationOfExpenditure={LocationOfExpenditure} />
    </div>
  );
};
export default ExpenseItem;
