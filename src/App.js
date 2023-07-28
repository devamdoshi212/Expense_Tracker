import "./App.css";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
const DummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2022, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, Setexpenses] = useState(DummyExpenses);

  const AddExpensestoDummyExpensesHandler = (NewExpenseExpensesData) => {
    Setexpenses((prevexpenses) => {
      return [NewExpenseExpensesData, ...prevexpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense
        OnSaveExpenses={AddExpensestoDummyExpensesHandler}
      ></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h2", {}, "Lets get started")
//   );
// }
export default App;
