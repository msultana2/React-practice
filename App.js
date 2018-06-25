import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person';
import DisplayName from './DisplayName';
import FormSubmit from './FormSubmit';
import Counter from './Counter';
import TickClock from './TickClock';
import ToDoList from './ToDoList';
import CheckBox from './CheckBox';
import SimpleAPI from './SimpleAPI';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Person name='Arju'> How are you! </Person><br/>
        <DisplayName /><br/>
        <FormSubmit /><br/>
        <Counter /><br/>
        <TickClock /><br/>
        <ToDoList /><br/>
        <CheckBox /><br/>
        <SimpleAPI /><br/>
      </div>
    );
  }
}

export default App;
