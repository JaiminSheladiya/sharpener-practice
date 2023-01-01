import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const initialValue = [
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
  ];
  let [expenses,setExpenses] = useState(initialValue)
  
  const [filteredYear, setFilteredYear] = useState("2020");
  const [filteredItems,setFilteredItems] = useState(initialValue)
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // setExpenses(initialValue)
    setFilteredItems(expenses.filter(
      (e) => e.date.getFullYear() == filteredYear
    ))
    // console.log(filteredItems)
    // setExpenses(filteredItems)
  };

  function deleteItem(id) {
 
   setExpenses(expenses.filter((el) => el.id != id)); 
    
  }

  function addItem(item) {
    item.id = `e${expenses.length + 1}`
    item.amount = +(item.amount)
    let newArr  = [item,...expenses ]
    setExpenses(newArr)
  }


  return (
    <div className="App">
      <NewExpense addItem={addItem} />
      <ExpensesFilter
        selected={filteredYear}
        filterChangeHandler={filterChangeHandler}
      />
      {filteredItems.length === 0 ? (
        <h2>No expense found.</h2>
      ) : (
        <Expenses expenses={filteredItems} deleteItem={deleteItem} />
      )}

      {filteredItems.length == 1 && (
        <p>Only single Expense here. Please add more...</p>
      )}
    </div>
  );
}

export default App;
