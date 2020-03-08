import React,{Component} from 'react';
import {connect} from 'react-redux'
import {jump} from '../actions/actions.js'
import  '../css/main.css'
import Conf from '../conf.js'

class Play extends Component {
  JUMP_TIME=500;
  JUMP_HEIGHT=50;
  SKY_HEIGHT=150;

  skyStyle = {
   height:this.SKY_HEIGHT 
  }

  handleJump = () => {
    this.props.dispatch(jump(this.JUMP_HEIGHT));
    this.skyStyle = {
      height:this.JUMP_HEIGHT
    };
    var that = this;

      that.forceUpdate();
      setTimeout(function() {
      that.skyStyle ={
        height:that.SKY_HEIGHT
      };
      that.forceUpdate();
    }, that.JUMP_TIME);
  }
  render() {
    return(
      <div className="divDuration">
        <p id="sky" style={this.skyStyle} className="divDuration"></p>
        <img width='50px' height='50px' src={require('../images/characters/char'+this.props.match.params.character+'.jpg')} onClick={this.handleJump}></img>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const height = state.height;
  return height;
};

export default connect(mapStateToProps)(Play)
