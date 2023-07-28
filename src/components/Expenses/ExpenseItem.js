import React, { useState } from "react";
import "../Expenses/ExpenseItem.css";
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(expenseitems) {
  const [title, setTitle] = useState(expenseitems.title); //initial value pass in argument and in array [1,2] 1=initial state and if 2 will update like this => setTitle("Updated") then useState render again this component
  const ClickHandler = () => {
    setTitle("Updated!!");
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={expenseitems.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${expenseitems.amount}</div>
          <button onClick={ClickHandler}>Change Title</button>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
