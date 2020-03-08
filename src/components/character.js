import React,{Component} from 'react';
import {connect} from 'react-redux'
import {selectCharacter} from '../actions/actions.js'

class Character extends Component {
  handleSelect = () => this.props.dispatch(selectCharacter(this.props.charId));
  render() {
    return(
      <div>
        <img width='50px' height='50px' src={this.props.src} onClick={this.handleSelect}></img>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const selectedCharacter = state.selectedCharacter;
  return selectedCharacter
};

export default connect(mapStateToProps)(Character)
