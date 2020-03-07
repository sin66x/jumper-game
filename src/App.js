import React, { Component } from 'react'
import reducer from './reducers/reducer.js'
import {selectCharacter} from './actions/actions'
import CharacterSelector from './components/character-select.js'
import Play from './components/play.js'
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

class App extends Component {
  render(){
    const { selectedCharacter } = this.props
   return (
     <Router>
       <Route exact path="/" component={CharacterSelector} />
       <Route path="/play/:character" component={Play} />
     </Router>
   );
  }
}
function select(state) {
   return {
      selectedCharacter: state.selectedCharacter
   }
}
export default connect(select)(App);
