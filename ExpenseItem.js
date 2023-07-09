// components/ExpenseItem.js
import React from "react";

function ExpenseItem({ expense, onDeleteExpense }) {
  const handleDelete = () => {
    onDeleteExpense(expense.id);
  };

  return (
    <li>
      <div>{expense.name}</div>
      <div>${expense.amount}</div>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default ExpenseItem;
