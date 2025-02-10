# Expense Tracker

## Overview

Expense Tracker is a modern, responsive web application built with React, TypeScript, and Tailwind CSS, using Vite as the build tool. It allows users to easily manage their expenses by adding, viewing, and deleting entries, as well as visualizing their spending patterns over time.

## Features

- Add expenses with name, amount, and category
- View a list of all expenses
- Delete individual expenses
- Filter expenses by category
- Visualize expenses on a line chart
- Responsive design for mobile and desktop
- Dark mode support
- Persistent storage using localStorage

## Tech Stack

- React
- TypeScript
- Vite (as build tool)
- Tailwind CSS
- Zustand (for state management)
- Zod (for form validation)
- Recharts (for data visualization)
- Shadcn UI (for UI components)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- pnpm (v6 or later)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/AnasOkasha-chambaam/expense-tracker.git
cd expense-tracker
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open [http://localhost:5173](http://localhost:5173) with your browser to see the application.

## Usage

### Adding an Expense

1. Fill in the expense name, amount, and select a category.
2. Click the "Add Expense" button.

### Viewing Expenses

- All expenses are listed on the main page.
- Use the category filter to view expenses from a specific category.

### Deleting an Expense

- Click the "Delete" button next to the expense you want to remove.

### Visualizing Expenses

- Switch to the "Chart" tab to view a line chart of your expenses over time.

## Project Structure

```plaintext
expense-tracker/
├── .gitignore
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── public/
├── README.md
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── assets/
│   ├── components/
│   │   ├── charts/
│   │   │   └── ExpenseChart.tsx
│   │   ├── dialogs/
│   │   │   └── DeleteExpenseItem.dialog.tsx
│   │   ├── Footer.tsx
│   │   ├── ExpenseForm.tsx
│   │   ├── ExpenseItem.tsx
│   │   ├── ExpenseList.tsx
│   │   └── TotalExpenses.tsx
│   ├── ui/
│   ├── index.css
│   ├── lib/
│   │   └── utils.ts
│   ├── main.tsx
│   ├── store/
│   │   └── expense.store.ts
│   └── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Customization

- To add or modify expense categories, update the `categories` array in `src/store/expense.store.ts`.
- Styling can be customized by modifying the Tailwind classes or updating the CSS files.

## Building for Production

To build the app for production, run:

```bash
pnpm build
```

This will generate a `dist` folder with your compiled application, ready for deployment.
