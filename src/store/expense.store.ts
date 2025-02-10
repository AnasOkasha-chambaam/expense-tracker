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
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  getFilteredExpenses: () => Expense[];
}

export const useExpenseStore = create<ExpenseStore>()(
  persist(
    (set, get) => ({
      expenses: [],
      categories: [
        "Food",
        "Transportation",
        "Entertainment",
        "Utilities",
        "Other",
      ],
      selectedCategory: null,
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

      setSelectedCategory: (category) => set({ selectedCategory: category }),
      getFilteredExpenses: () => {
        const { expenses, selectedCategory } = get();
        return selectedCategory && selectedCategory !== "all"
          ? expenses.filter((expense) => expense.category === selectedCategory)
          : expenses;
      },
    }),
    {
      name: "expense-store",
    }
  )
);
