import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
  }

  state = {
    persons: [
      { id: 1, name: 'Alex', age: 30 },
      { id: 2, name: 'Jo', age: 28 },
      { id: 3, name: 'Lily', age : 12 }
    ],
    showPersons: false
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWIllMount')
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] shouldComponentUpdate', nextProps, nextState);
    //return true;
    return nextState.persons !== this.state.persons ||
      nextState.showPersons !== this.state.showPersons;
  }

  

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons})
  }

  render() {
    let persons = null;

    if (this.state.showPersons === true) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons} 
            clicked={this.deletePersonHandler} 
            changed={this.nameChangedHandler} />
        </div> 
      );
      
    }


    return (
      <div className="App">
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons} 
          click={this.togglePersonsHandler} />

        {persons}
        
      </div>
    );

    //return React.createElement('div',null, React.createElement('h1',{className: 'App'},'Hello!!!')); 
  }
}

export default App;
