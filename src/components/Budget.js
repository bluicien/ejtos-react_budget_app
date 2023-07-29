import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    console.log(totalExpenses)

    function budgetChange(event) {
    const {value} = event.target
            if (value > 20000) {
                return alert("The budget cannot exceed 20,000")
            } else if (value < totalExpenses) {
                return alert("You cannot reduce budget lower than total expense")
            } else {
                dispatch({
                    type: 'SET_BUDGET',
                    payload: value,
                });}
            } 
    
    return (
        <div className='alert alert-secondary' style={{display: 'flex', flexDirection: 'row', width: "200px", justifyContent: "center"}}>
            <label style={{width: '70px'}}>Budget:{currency[0]}</label>
            <input
            required='required'
            name='budget'
            type='number'
            step="10"
            id='budget'
            value={budget}
            style={{ marginLeft: '0' , size: 10, width: "70px"}}
            onChange={(event) => budgetChange(event)}>
            </input>
        </div>
    );
};
export default Budget;