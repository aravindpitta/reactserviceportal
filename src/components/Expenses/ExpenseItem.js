import React , {useState} from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  
  // const [title,setTitle] = useState(props.title);
  
  // const changeTitle = () => {
  //     setTitle(title + 'updated');
  //     console.log('Title Changed!! --' + title);  
  // }
  // <button className="button__change"> Change Title </button>

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
