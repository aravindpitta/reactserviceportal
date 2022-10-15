import React, { useState } from "react";
import './ExpenseForm.css'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
const NewExpense = (props) => {

const [isEditing,setIsEditing] = useState(false)

const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
        ...enteredExpenseData,
        id: Math.random.toString()
    }
    //console.log('entered form data', expenseData)
    props.onAddExpese(expenseData)
    setIsEditing(false)
}

const stopEditingHandler = () => {
    setIsEditing(false)
}
const startEditingHandler = () => {
    setIsEditing(true)
}
return (
<div className='new-expense'>
{!isEditing && (<button onClick={startEditingHandler}>Add New Expense</button>) }
{isEditing &&  (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelHandler={stopEditingHandler}/>
)}
</div>);
}
export default NewExpense;