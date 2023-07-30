import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }

    const button ={
        float: "left",
        marginLeft: "10px",
        width: "30px",
        height: "30px",
        lineHeight: "30px",
        textAlign: "center",
        backgroundColor:"Green",
        border: "transparent",
        borderRadius: "50%",
        color: "#ffffff",
        cursor: "pointer",
        display: "inline-block",
        padding: "0",
        font: "bold 29px/100% Arial, sans-serif"
    }


    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency[0]}{props.cost}</td>
        <td><button style={{...button, backgroundColor: "#4ba427"}} onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button style={{...button, backgroundColor: "#933131"}} onClick={event=> decreaseAllocation(props.name)}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};
export default ExpenseItem;