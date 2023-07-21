import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
function App() {
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

  return (
    <div className="App">
      <ExpenseItem
        title={DummyExpenses[0].title}
        amount={DummyExpenses[0].amount}
        date={DummyExpenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={DummyExpenses[1].title}
        amount={DummyExpenses[1].amount}
        date={DummyExpenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={DummyExpenses[2].title}
        amount={DummyExpenses[2].amount}
        date={DummyExpenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={DummyExpenses[3].title}
        amount={DummyExpenses[3].amount}
        date={DummyExpenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
