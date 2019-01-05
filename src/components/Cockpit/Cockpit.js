import React from 'react';

import cockpitStyle from './Cockpit.module.css';
import button from  './Button.module.css';

import Aux from '../../hoc/Auxiliary'

const cockpit = (props) => {
    const classes = [];
    let btnClass = cockpitStyle.Button;
    
    console.log(props.showPersons);

    if (props.showPersons) {
        btnClass = [cockpitStyle.Button, button.Red].join(' ');
        console.log(btnClass);
    }

    if (props.persons.length <= 2) {
    classes.push('red');
    }

    if (props.persons.length <= 1) {
    classes.push('bold');
    }


    return (
        <>
            <h1>Hi, I'm a React App</h1> 
            <p className={classes.join(' ')}>This is hereeeeee!!!</p>

            <button 
            className={btnClass}
            onClick={props.click}
            >Toggle Persons</button>

        </>    
    );
};

export default cockpit;