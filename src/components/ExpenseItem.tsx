import React from "react";
import { useExpenseStore, Expense } from "@/store/expense.store";
import { Button } from "@/components/ui/button";

interface ExpenseItemProps {
  expense: Expense;
}

export const ExpenseItem: React.FC<ExpenseItemProps> = ({ expense }) => {
  const { deleteExpense } = useExpenseStore();

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow rounded-lg">
      <div>
        <h3 className="font-semibold">{expense.name}</h3>
        <p className="text-sm text-gray-500">{expense.category}</p>
      </div>
      <div className="flex items-center space-x-4">
        <span className="font-bold">${expense.amount.toFixed(2)}</span>
        <Button variant="destructive" onClick={() => deleteExpense(expense.id)}>
          Delete
        </Button>
      </div>
    </div>
  );
};
