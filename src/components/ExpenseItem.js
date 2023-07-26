import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import "./Card";
import Card from "./Card";
function ExpenseItem(expenseitems) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseitems.date} />
      <div className="expense-item__description">
        <h2>{expenseitems.title}</h2>
        <div className="expense-item__price">${expenseitems.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
