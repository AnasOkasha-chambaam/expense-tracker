import React, { useState } from "react";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList";
import { TotalExpenses } from "./components/TotalExpenses";
import { useExpenseStore } from "./store/expense.store";
import { ThemeProvider } from "@/components/ui/theme-provider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { ThemeToggle } from "./components/ui/theme-toggle";

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
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="px-3">
        <Card className="container mx-auto my-9 p-4 max-w-2xl">
          <CardHeader>
            <div className="flex items-center justify-between gap-2">
              <div>
                <CardTitle>Expense Tracker</CardTitle>
                <CardDescription>
                  Keep track of your expenses by adding them to the list below
                </CardDescription>
              </div>
              <ThemeToggle />
            </div>
          </CardHeader>
          <ExpenseForm />
          <CardContent>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Expenses</h2>
              <Select
                onValueChange={(value) => setSelectedCategory(value || null)}
              >
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
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
};

export default App;
