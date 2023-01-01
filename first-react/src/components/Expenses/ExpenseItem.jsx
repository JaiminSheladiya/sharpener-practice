import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
const ExpenseItem = ({
  title,
  amount,
  date,
  LocationOfExpenditure,
  deleteItem,
  id
}) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <ExpenseDetails
        title={title}
        amount={amount}
        LocationOfExpenditure={LocationOfExpenditure}
        deleteItem={deleteItem}
        id={id}
      />
    </Card>
  );
};
export default ExpenseItem;
