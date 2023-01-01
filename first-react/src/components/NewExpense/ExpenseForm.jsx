import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = ({addItem , setShow}) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [time, setTime] = useState("");
  // const initialData = { title: "", amount: "", time: "" };
  // const [data,setData] = useState(initialData)
// console.log(data)
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setTime(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  function handleSubmit(e){
    e.preventDefault()
    // console.log(data)
    const data = {
      title: title,
      amount: amount,
      date : new Date(time)
    }
    setTitle('')
    setTime('')
    setAmount("")
    console.log(data)
    addItem(data)
    setShow(true)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={time}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit" >Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
