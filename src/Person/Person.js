import React from 'react';
import Radium from 'radium';

import './Person.scss';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)' : {
            width: '450px'
        }
    };
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old! </p>
            {props.children}
            <input type="text" onChange={props.changed} value={props.name} />
        </div>    
    )    
}

export default Radium(person);