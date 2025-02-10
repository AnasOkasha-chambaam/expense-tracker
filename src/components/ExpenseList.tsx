import { useExpenseStore } from "@/store/expense.store";
import { InfoIcon } from "lucide-react";
import React from "react";
import { ExpenseItem } from "./ExpenseItem";
import { Card, CardContent } from "./ui/card";

export const ExpenseList: React.FC = () => {
  const { getFilteredExpenses, selectedCategory } = useExpenseStore();
  const filteredExpenses = getFilteredExpenses();

  return (
    <div className="space-y-4 p-4">
      {filteredExpenses.length === 0 && (
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground flex items-center justify-center gap-2">
              <InfoIcon />
              {selectedCategory
                ? `No expenses found in ${selectedCategory} category`
                : "No expenses added yet"}
            </p>
          </CardContent>
        </Card>
      )}
      {filteredExpenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </div>
  );
};
