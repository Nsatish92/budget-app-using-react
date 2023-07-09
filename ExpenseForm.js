// components/ExpenseForm.js
import React, { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || amount <= 0) {
      // Handle form validation or error messages
      return;
    }

    const expense = {
      id: Math.random().toString(),
      name,
      amount: +amount
    };

    onAddExpense(expense);
    setName("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Expense Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="amount">Expense Amount:</label>
        <input
          type="number"
          id="amount"
          min="0.01"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
