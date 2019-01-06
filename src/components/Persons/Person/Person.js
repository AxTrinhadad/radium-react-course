import React, {Component} from 'react';
import PropTypes from "prop-types";

import classes from './Person.module.scss';
import styles from './Demo.module.scss';

import WithClass from '../../../hoc/WithClass';

import { AuthContext } from '../../../containers/App'

class Person extends Component {
    constructor(props) {
        super(props);

        this.inputElement = React.createRef();
    }

    componentWillMount() {

    }

    componentDidMount() {
        //this.focusInput();
    }

    focusInput() {
        //if (this.props.position === 0) {
            //this.inputElement.current.focus();
       // }
    }

    render () {
        return (
            <>
                <AuthContext.Consumer>
                    {auth => auth ? <p>I'm authenticated!</p> : null}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old! </p>
                {this.props.children}
                <input type="text"
                    ref={this.inputElement} 
                    onChange={this.props.changed} 
                    value={this.props.name} />
                <p className={styles.Person}>I am testing demo here</p>
            </>    
        ) 
    }   
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func 
}

export default WithClass(Person,classes.Person);