import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

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
        <>
        <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle variant="success" id="currency">Currency ({currency} {name_currency})</Dropdown.Toggle>
                <Dropdown.Menu >
                    <Dropdown.Item onClick={event => changeCurrency("$")}>$ Dollar</Dropdown.Item>
                    <Dropdown.Item onClick={event => changeCurrency("£")}>£ Pound</Dropdown.Item>
                    <Dropdown.Item onClick={event => changeCurrency("€")}>€ Euro</Dropdown.Item>
	                <Dropdown.Item onClick={event => changeCurrency("₹")}>₹ Ruppee</Dropdown.Item>
	        </Dropdown.Menu>
        </Dropdown>
    </>
    );
};

export default Currency;