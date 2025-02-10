// src/App.tsx
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
import { Toaster } from "./components/ui/sonner";
import { Separator } from "./components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExpenseChart } from "./components/charts/ExpenseChart";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const { categories, selectedCategory, setSelectedCategory } =
    useExpenseStore();
  const [activeTab, setActiveTab] = useState("list");

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <>
        <div className="px-3">
          <Card className="container mx-auto my-9 p-4 max-w-2xl">
            <CardHeader>
              <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-2">
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
            <Separator className="my-8" />
            <CardContent>
              <h2 className="text-2xl font-semibold mb-4">Expenses</h2>
              <Select
                value={selectedCategory || ""}
                onValueChange={(value) =>
                  setSelectedCategory(value === "all" ? null : value)
                }
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
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2 mt-3">
                  <TabsTrigger value="list">List</TabsTrigger>
                  <TabsTrigger value="chart">Chart</TabsTrigger>
                </TabsList>
                <TabsContent value="list">
                  <div>
                    <ExpenseList />
                  </div>
                </TabsContent>
                <TabsContent value="chart">
                  <ExpenseChart />
                </TabsContent>
              </Tabs>
              <TotalExpenses />
            </CardContent>
          </Card>
          <Toaster position="bottom-center" richColors />
        </div>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default App;
