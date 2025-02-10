import React, { useState } from "react";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList";
import { TotalExpenses } from "./components/TotalExpenses";
import { useExpenseStore } from "./store/expense.store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const App: React.FC = () => {
  const { categories } = useExpenseStore();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredExpenses = useExpenseStore((state) =>
    selectedCategory
      ? state.expenses.filter(
          (expense) => expense.category === selectedCategory
        )
      : state.expenses
  );

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">Expense Tracker</h1>
      <ExpenseForm />
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Expenses</h2>
        <Select onValueChange={(value) => setSelectedCategory(value || null)}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <ExpenseList />
        <TotalExpenses />
      </div>
    </div>
  );
};

export default App;
