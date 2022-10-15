import React, {props} from 'react'
import './ExpensesFilter.css'




const ExpensesFilter = (props) => {
    
    const filterHandler = (event) => {
        console.log('selected year occured', event.target.value)
        props.onChangeSelectedYear(event.target.value);
    }     
   

  return (
    <div className='expenses-filter'>
     <div className='expenses-filter__control'>
       <label>Filter by Year:</label>
        <select id='selectedYear' value={props.selected} onChange={filterHandler}>
            <option value='2018'>2018</option>
            <option value='2019'>2019</option>
            <option value='2020'>2020</option>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
        </select>
    </div>
    </div>
  );
}

export default ExpensesFilter;