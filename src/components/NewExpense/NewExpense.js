import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const SaveExpenseDataHandler = (EnteredExpenseData) => {
    const expensesdata = {
      ...EnteredExpenseData,
    };
    props.OnSaveExpenses(expensesdata);
    console.log(expensesdata);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
