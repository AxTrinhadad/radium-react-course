import React from 'react';

import './Cockpit.css';
import button from  './Button.module.css';

const cockpit = (props) => {
    const classes = [];
    let btnClass = '';
    
    if (props.showPersons) {
        btnClass = button.Red;
    }

    if (props.persons.length <= 2) {
    classes.push('red');
    }

    if (props.persons.length <= 1) {
    classes.push('bold');
    }


    return (
        <div className="Cockpit">
            <h1>Hi, I'm a React App</h1> 
            <p className={classes.join(' ')}>This is hereeeeee!!!</p>

            <button 
            className={btnClass}
            onClick={props.click}
            >Toggle Persons</button>

        </div>    
    );
};

export default cockpit;