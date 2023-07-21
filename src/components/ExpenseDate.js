function ExpenseDate(data) {
  const month = data.date.toLocaleString("en-US", { month: "long" });
  const year = data.date.getFullYear();
  const day = data.date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
}

export default ExpenseDate;
