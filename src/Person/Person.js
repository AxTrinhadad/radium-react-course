import React from 'react';

import styles from './Person.scss';
import './Demo.scss';

const person = (props) => {

    return (
        <div className={styles.Person}>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old! </p>
            {props.children}
            <input type="text" onChange={props.changed} value={props.name} />
        </div>    
    )    
}

export default person;