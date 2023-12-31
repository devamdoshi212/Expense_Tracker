import React from "react";
import "../Expenses/ExpenseItem.css";
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(expenseitems) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={expenseitems.date} />
        <div className="expense-item__description">
          <h2>{expenseitems.title}</h2>
          <div className="expense-item__price">${expenseitems.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
