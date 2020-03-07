import React,{Component} from 'react';
import {connect} from 'react-redux'

class Play extends Component {
  render() {
    return(
      <div>
        <img width='50px' height='50px' src={require('../images/characters/char'+this.props.match.params.character+'.jpg')}></img>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const selectedCharacter = state.selectedCharacter;
  return selectedCharacter
};

export default connect(mapStateToProps)(Play)
