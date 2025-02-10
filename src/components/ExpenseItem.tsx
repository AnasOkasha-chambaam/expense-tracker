import { Expense } from "@/store/expense.store";
import moment from "moment-timezone";
import React from "react";
import DeleteExpenseItemDialog from "./dialogs/DeleteExpenseItem.dialog";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

interface ExpenseItemProps {
  expense: Expense;
}

export const ExpenseItem: React.FC<ExpenseItemProps> = ({ expense }) => {
  return (
    <div className="bg-background p-4 shadow rounded-lg">
      <Badge variant={"secondary"}>{expense.category}</Badge>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div>
          <h3 className="font-semibold mt-1">{expense.name}</h3>
          <p className="text-sm text-muted-foreground">
            {moment(expense.createdAt).format("MMMM Do YYYY, h:mm a")}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <span className="font-bold">${expense.amount.toFixed(2)}</span>
          <Separator className="sm:hidden" />
          <DeleteExpenseItemDialog expenseId={expense.id} />
        </div>
      </div>
    </div>
  );
};
