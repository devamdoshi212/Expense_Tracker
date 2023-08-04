import React, { useState } from "react";
import "./ExpenseForm.css";
import ErrorModal from "../UI/ErrorModal";
const ExpenseForm = (props) => {
  // we can make multiple useState like this
  const [EnteredTitle, SetTitle] = useState("");
  const [EnteredAmount, SetAmount] = useState("");
  const [EnteredTime, SetTime] = useState("");

  //useState for error handling
  const [err, Seterror] = useState();
  //   we can make single state and pass object like this
  //   const [UserInput, SetUserInput] = useState({
  //     EnteredTitle: "",
  //     EnteredAmount: "",
  //     EnteredTime: "",
  //   });

  const TitleHandler = (event) => {
    SetTitle(event.target.value);
    // SetUserInput({
    //   ...UserInput,
    //   EnteredTitle: event.target.value,
    // });

    // // this method takes latest previous state
    // SetUserInput((prevState) => {
    //   return { ...prevState, EnteredTitle: event.target.value };
    // });
  };
  const AmountHandler = (event) => {
    SetAmount(event.target.value);
    // SetUserInput({
    //   ...UserInput,
    //   EnteredAmount: event.target.value,
    // });
    // SetUserInput((prevState) => {
    //   return { ...prevState, EnteredAmount: event.target.value };
    // });
  };
  const DateHandler = (event) => {
    SetTime(event.target.value);
    // SetUserInput({
    //   ...UserInput,
    //   EnteredTime: event.target.value,
    // });
    // SetUserInput((prevState) => {
    //   return { ...prevState, EnteredTime: event.target.value };
    // });
  };

  const ValidateDate = (data) => {
    const currentdate = new Date();
    const year = currentdate.getFullYear();
    const month = currentdate.getMonth() + 1;
    const day = currentdate.getDate();

    const enteryear = data.slice(0, 4);
    const entermonth = data.slice(5, 7);
    const enterday = data.slice(8, 10);

    // console.log(enteryear, entermonth, enterday);

    if (enteryear > year) {
      return false;
    } else {
      if (entermonth > month) return false;
      else {
        if (enterday > day) return false;
        else return true;
      }
    }
  };

  const SumbitHandler = (event) => {
    //sumbit button refresh the page , but we dont want to refresh that page so use event.preventDefault()
    event.preventDefault();
    // store all data in one object
    const expensesdata = {
      title: EnteredTitle,
      amount: EnteredAmount,
      date: new Date(EnteredTime),
    };
    // console.log(expensesdata);
    if (
      EnteredAmount.trim().length === 0 ||
      EnteredTitle.trim().length === 0 ||
      EnteredTime.trim().length === 0
    ) {
      Seterror({ title: "Invalid Input", info: "All fields required." });
      return;
    } else if (!ValidateDate(EnteredTime)) {
      Seterror({ title: "Invalid Input", info: "Future Date not allowed" });
      SetTime("");
      return;
    }
    props.onSaveExpenseData(expensesdata);
    SetTitle("");
    SetAmount("");
    SetTime("");
  };

  return (
    <div>
      {err && (
        <ErrorModal
          title={err.title}
          info={err.info}
          OnErrorModal={() => {
            Seterror();
          }}
        ></ErrorModal>
      )}
      <form onSubmit={SumbitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={EnteredTitle}
              onChange={TitleHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              max="1000000000000"
              value={EnteredAmount}
              onChange={AmountHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              value={EnteredTime}
              max="2023-12-31"
              onChange={DateHandler}
            ></input>
          </div>
        </div>
        <div>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="sumbit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};
export default ExpenseForm;
