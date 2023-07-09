// components/BudgetForm.js
import React from "react";

function BudgetForm({ budget, setBudget }) {
  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  return (
    <form>
      <div>
        <label htmlFor="budget">Enter Your Budget:</label>
        <input
          type="number"
          id="budget"
          value={budget}
          onChange={handleBudgetChange}
        />
      </div>
    </form>
  );
}

export default BudgetForm;
