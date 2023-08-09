import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Cards from "../UI/Cards";

const ExpenseItem = (props) => {

  return (
    <Cards className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={props.amount}
        title={props.title}
      />
    </Cards>
  );
};

export default ExpenseItem;
