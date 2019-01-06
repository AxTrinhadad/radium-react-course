import React, { PureComponent } from 'react';

import Person from "./Person/Person";

class Persons extends PureComponent {
    constructor(props) {
        super(props);

        this.lastPersonRef = React.createRef();
    }

    componentWillMount() {

    }

    componentDidMount() {
        console.log('[Persons.js] componentDidMount');
        //this.lastPersonRef.current.focusInput();
    }

    componentWillReceiveProps(nextProps) {
        console.log('[Persons.js] componentWillReceiveProps', nextProps)
    }

    render () {
        return this.props.persons.map( (person, index) => {
    
            return <Person 
                position={index}
                name={person.name} 
                age={person.age} 
                click={() => this.props.clicked(index)} 
                changed={(event) => this.props.changed(event, person.id)} 
                key={person.id}
                ref={this.lastPersonRef}
                >
                </Person>
            
            }
        );
    }

    
} 

export default Persons;