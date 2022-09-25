import Expenses from "./components/Expenses";
import "./App.css";
import NewExpense from "./components/newExpenses/NewExpense";
import { useState, props } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Rent",
    amount: 94.12,
    date: new Date(2022, 8, 1),
  },
  {
    id: "e2",
    title: "Utility Bill",
    amount: 110.0,
    date: new Date(2022, 8, 1),
  },
  {
    id: "e3",
    title: "News Paper Bill",
    amount: 12.0,
    date: new Date(2022, 8, 5),
  },
  {
    id: "e4",
    title: "Milk Bill",
    amount: 180.0,
    date: new Date(2022, 8, 5),
  },
];


function App() {
 
const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
const [addNewExpenseFlag, setAddNewExpenseFlag] = useState('true')

const addExpnseHandler =(expense) => {
    console.log('In App.js', expenses)
    console.log('new expense', expense)
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];      
    });
    setAddNewExpenseFlag({
      addNewExpenseFlag : true
    })
  };

  // const [expenseItem, setExpenseItem] = useState({
  //   title:'',
  //   amount:'',
  //   date:''
  // })


  return (
    <div className="App">
      <div className="application-header">
        <p className="application-header-title"> <b>PRR CONSTRUCTIONS </b> </p>
      </div>
      <NewExpense onAddExpese={addExpnseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
