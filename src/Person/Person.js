import React from 'react';

import './Person.scss';
import styles from './Demo.module.scss';

const person = (props) => {
    const rnd = Math.random();

    if (rnd > 0.7) {
        throw new Error('something wong');
    }
    
    return (
        

        <div className="Person">
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old! </p>
            {props.children}
            <input type="text" onChange={props.changed} value={props.name} />
            <p className={styles.Person}>I am testing demo here</p>
        </div>    
    )    
}

export default person;