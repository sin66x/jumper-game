import React,{Component} from 'react';
import Character from './character.js';
import listReactFiles from 'list-react-files'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import char1 from '../images/characters/char1.jpg'
import char2 from '../images/characters/char2.jpg'
import char3 from '../images/characters/char3.jpg'
import char4 from '../images/characters/char4.jpg'

class CharacterSelect extends Component {
  render() {
    return(
       <div>
        <Character src={char1} charId='0'/>
        <Character src={char2} charId='1'/>
        <Character src={char3} charId='2'/>
        <Character src={char4} charId='3'/>
       </div>
    )
  }
}
export default CharacterSelect;
