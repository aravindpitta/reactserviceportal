import React, { useState } from 'react';
import './NewExpense.css'

const ExpenseForm = (props) => {
const [enteredTitle, setEnteredTitle] = useState('')
const [enteredAmount, setEnteredAmount] = useState('')
const [enteredDate, setEnteredDate] = useState('')

// const [userInput, setUserInput] = useState({
//     enteredTitle:'',
//     enteredAmount:'',
//     enteredDate:''
// })

const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
    // setUserInput((prevState)=>{
    //     return {...prevState, enteredTitle : event.target.value }
    // }
    // );
}

const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
    // setUserInput( (prevState) => {
    //     return {...prevState, enteredAmount : event.target.value}
    // }
    // );
}

const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
    // setUserInput((prevState) => {
    //     return {...prevState, enteredDate : event.target.value }
    // }
    // );
}

const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
        title : enteredTitle,
        amount : enteredAmount,
        date : new Date(enteredDate)
    }
    props.onSaveExpenseData(expenseData)
    //console.log(expenseData)
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
}


return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
        <div className="new-expense__control">
            <label> Title</label>
            <input type='text' id='title' value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
            <label> Amount</label>
            <input type='number' id='amount' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
            <label> Date</label>
            <input type='date' id='date' min='2022-9-21' max='2022-09-23' value={enteredDate} onChange={dateChangeHandler} />
        </div>
    </div> 
    <div className="new-expense__actions">
        <button type='submit'>Add Expense</button>
        <button type='submit' onClick={props.onCancelHandler}>Cancel</button>
    </div>
</form>
);
};

export default ExpenseForm;