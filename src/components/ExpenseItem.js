import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { IoIosAddCircle } from "react-icons/io";
import { FaMinusCircle } from "react-icons/fa";
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

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

    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td><IoIosAddCircle color='forestgreen' size='2.5em'  onClick={event=> increaseAllocation(props.name)}></IoIosAddCircle></td>
        <td><FaMinusCircle color='darkred' size='2.0em' onClick={handleDeleteExpense}></FaMinusCircle></td>
        </tr>
    );
};

export default ExpenseItem;
