import { useExpenseStore } from "@/store/expense.store";
import { InfoIcon } from "lucide-react";
import React from "react";
import { ExpenseItem } from "./ExpenseItem";

export const ExpenseList: React.FC = () => {
  const { expenses } = useExpenseStore();

  return (
    <div className="space-y-4 p-4">
      {expenses.length === 0 && (
        <p className="border p-3 bg-muted text-muted-foreground flex items-center gap-2">
          <InfoIcon /> No expenses added yet
        </p>
      )}
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </div>
  );
};
