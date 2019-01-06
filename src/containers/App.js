import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

export const AuthContext = React.createContext(false);


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
    showPersons: false,
    toggleClicked: 0,
    authenticated: false,
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
    this.setState( (prevState,props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons})
  }

  loginHandler = () => {
      this.setState({authenticated: true});
  }

  render() {
    let persons = null;

    if (this.state.showPersons === true) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons} 
            clicked={this.deletePersonHandler} 
            changed={this.nameChangedHandler}
             />
        </div> 
      );
      
    }


    return (
      <>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons} 
          click={this.togglePersonsHandler} 
          login={this.loginHandler}/>
          <AuthContext.Provider value={this.state.authenticated}>
            {persons}
          </AuthContext.Provider>
        
      </>  
    );

    //return React.createElement('div',null, React.createElement('h1',{className: 'App'},'Hello!!!')); 
  }
}

export default WithClass(App, classes.App);
