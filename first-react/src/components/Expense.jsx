import React from "react";

const Expense = ({ item }) => {
  console.log(item);
  return (
    <div>
      <span>{item[0]} </span>
      <span>{item[1]}</span>
    </div>
  );
};

export default Expense;
