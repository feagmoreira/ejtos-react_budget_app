import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    console.log(currency)
    function currency_name(){
        switch(currency){
        case '$':
            return "Dollar";
        case '£':
            return "Pound";
        case '€':
            return "Euro";
        case '₹':
            return "Ruppee";
        }
    } 
    const name_currency = currency_name();
    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }


    return (
        <div class="dropdown">
            <button class="btn btn-success dropdown-toggle" type="button" id="currency" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Currency ({currency} {name_currency})
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button class="dropdown-item" type="button" onClick={changeCurrency("$")}>$ Dollar</button>
            <button class="dropdown-item" type="button" onClick={changeCurrency("£")}>£ Pound</button>
            <button class="dropdown-item" type="button" onClick={changeCurrency("€")}>€ Euro</button>
            <button class="dropdown-item" type="button" onClick={changeCurrency("₹")}>₹ Ruppee</button>
            </div>
        </div>
        
    );
};

export default Currency;