import React, { useContext } from 'react';
import { IoIosAddCircle } from "react-icons/io";
import { FaMinusCircle } from "react-icons/fa";
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

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><IoIosAddCircle color='forestgreen' size='2.5em'  onClick={event=> increaseAllocation(props.name)}></IoIosAddCircle></td>
        <td><FaMinusCircle color='darkred' size='2.0em' onClick={event=> decreaseAllocation(props.name)}></FaMinusCircle></td>
        </tr>
    );
};

export default ExpenseItem;
