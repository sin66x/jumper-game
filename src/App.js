import React, { Component } from 'react'
import reducer from './reducers/reducer.js'
import {selectCharacter} from './actions/actions'
import CharacterSelector from './components/character-select.js'
import './App.css';

class App extends Component {
  render(){
   return (
     <div className="App">
       <CharacterSelector onSelectClick = {selected => this.props.dispatsch(selectCharacter(selected))} /> 
     </div>
   );
  }
}

export default App;
