import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const [newBudget, setNewBudget] = useState(budget);
    function handleBudgetChange(event){
            if (event.target.value > 20000){
            alert("Upper limit of £20000 reached! Try another value.")
            return;
            }
            else if(event.target.value < totalExpenses){
                alert("You cannot reduce the budget value lower than the spending")
            return;
            }
            else{
                setNewBudget(event.target.value);
            }
            
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<input type="number" step="10" max="20000" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
