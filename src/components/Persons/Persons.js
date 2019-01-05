import React, { PureComponent } from 'react';

import Person from "./Person/Person";

class Persons extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    componentDidMount() {
        console.log('[Persons.js] componentDidMount')
    }

    componentWillReceiveProps(nextProps) {
        console.log('[Persons.js] componentWillReceiveProps', nextProps)
    }

    render () {
        return this.props.persons.map( (person, index) => {
    
            return <Person 
                name={person.name} 
                age={person.age} 
                click={() => this.props.clicked(index)} 
                changed={(event) => this.props.changed(event, person.id)} 
                key={person.id}
                >
                </Person>
            
            }
        );
    }

    
} 

export default Persons;