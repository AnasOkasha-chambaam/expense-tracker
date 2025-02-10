import { useExpenseStore } from "@/store/expense.store";
import { InfoIcon } from "lucide-react";
import React from "react";
import { ExpenseItem } from "./ExpenseItem";

export const ExpenseList: React.FC = () => {
  const { getFilteredExpenses, selectedCategory } = useExpenseStore();
  const filteredExpenses = getFilteredExpenses();

  return (
    <div className="space-y-4 p-4">
      {filteredExpenses.length === 0 && (
        <p className="border p-3 bg-muted text-muted-foreground flex items-center gap-2">
          <InfoIcon />
          {selectedCategory
            ? `No expenses found in ${selectedCategory} category`
            : "No expenses added yet"}
        </p>
      )}
      {filteredExpenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </div>
  );
};
