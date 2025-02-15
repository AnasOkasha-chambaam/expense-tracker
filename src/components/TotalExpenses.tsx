import React from "react";
import { useExpenseStore } from "@/store/expense.store";

export const TotalExpenses: React.FC = () => {
  const getFilteredExpenses = useExpenseStore(
    (state) => state.getFilteredExpenses
  );
  const filteredExpenses = getFilteredExpenses();
  const total = filteredExpenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <div className="text-2xl font-bold mt-4">Total: ${total.toFixed(2)}</div>
  );
};
