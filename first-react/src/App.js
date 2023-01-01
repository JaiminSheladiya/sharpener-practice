import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  let [expenses,setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "Delhi",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: "Pune",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "Bangalore",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "Ahmedabad",
    },
  ])
  

  function deleteItem(id) {
    console.log(id)
   setExpenses(expenses.filter((el) => el.id != id)); 
    
  }

  function addItem(item) {
    // expenses.push(item);
    item.id = `e${expenses.length + 1}`
    item.amount = +(item.amount)
    let newArr  = [...expenses  ,item]
    setExpenses(newArr)
  }


  return (
    <div className="App">
      <NewExpense addItem={addItem} />
      {expenses.map((e) => (
        <ExpenseItem
          key={e.id}
          title={e.title}
          amount={e.amount}
          date={e.date}
          LocationOfExpenditure={e.location}
          deleteItem={deleteItem}
          id={e.id}
        />
      ))}
    </div>
  );
}

export default App;
