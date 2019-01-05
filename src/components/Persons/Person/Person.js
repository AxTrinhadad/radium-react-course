import React, {Component} from 'react';

import './Person.scss';
import styles from './Demo.module.scss';

class Person extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    render () {
        return (
            <div className="Person">
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old! </p>
                {this.props.children}
                <input type="text" onChange={this.props.changed} value={this.props.name} />
                <p className={styles.Person}>I am testing demo here</p>
            </div>    
        ) 
    }   
}

export default Person;