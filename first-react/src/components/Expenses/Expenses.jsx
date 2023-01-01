import React from 'react'
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
const Expenses = ({expenses , deleteItem}) => {
  return (
    <div>
      <Card classname="expenses">
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
      </Card>
    </div>
  );
}

export default Expenses