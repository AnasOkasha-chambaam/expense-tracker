import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Expense {
  id: string;
  name: string;
  amount: number;
  category: string;
  createdAt: string;
}

interface ExpenseStore {
  expenses: Expense[];
  addExpense: (expense: Omit<Expense, "id" | "createdAt">) => void;
  deleteExpense: (id: string) => void;
  categories: string[];
  addCategory: (category: string) => void;
}

export const useExpenseStore = create<ExpenseStore>()(
  persist(
    (set) => ({
      expenses: [],
      categories: [
        "Food",
        "Transportation",
        "Entertainment",
        "Utilities",
        "Other",
      ],
      addExpense: (expense) =>
        set((state) => ({
          expenses: [
            ...state.expenses,
            {
              ...expense,
              id: Date.now().toString(),
              createdAt: new Date().toISOString(),
            },
          ],
        })),
      deleteExpense: (id) =>
        set((state) => ({
          expenses: state.expenses.filter((expense) => expense.id !== id),
        })),
      addCategory: (category) =>
        set((state) => ({
          categories: [...state.categories, category],
        })),
    }),
    {
      name: "expense-store",
    }
  )
);
