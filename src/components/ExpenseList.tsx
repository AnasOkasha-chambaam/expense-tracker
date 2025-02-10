import React from "react";
import { useExpenseStore } from "@/store/expense.store";
import { ExpenseItem } from "./ExpenseItem";

export const ExpenseList: React.FC = () => {
  const { expenses } = useExpenseStore();

  return (
    <div className="space-y-4">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </div>
  );
};
