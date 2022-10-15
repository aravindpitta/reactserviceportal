import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter'
import "./Expenses.css";
import ExpenseDate from "./ExpenseDate";
import ExpensesList from "./ExpensesList";
import Chart from "../Chart/Chart";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  //const expenses = [];
  // for (let i in props.items) {
  //   expenses[i] = {
  //     title: props.items[i].title,
  //     amount: props.items[i].amount,
  //     date: props.items[i].date,
  //   };
  // }
  
  const [selectedYear, setSelectedYear] = useState('2021');
  const changeExpenseYearHandler = (selectedYear) => {
    console.log('Selected Year: ', selectedYear)
    setSelectedYear(selectedYear)
  }  

  const filteredExpensesList = props.items.filter((expense) => {
    return expense.date.getFullYear().toString()===selectedYear;
  });

  return (
    <div className="expenses">
      
      <ExpensesFilter selected={selectedYear} onChangeSelectedYear={changeExpenseYearHandler}/>
      <ExpensesChart expenses={filteredExpensesList}/>
      <ExpensesList items={filteredExpensesList}/>
    </div>
  );
}

export default Expenses;
