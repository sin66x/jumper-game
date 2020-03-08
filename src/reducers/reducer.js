import {SELECT_CHARACTER} from '../actions/actions.js'
import {JUMP} from '../actions/actions.js'


const initialState = {
  selectedCharacter :0,
  height:100
};

const reducer = (state = initialState , action) => {
  switch (action.type) {
    case(SELECT_CHARACTER):
      return { 
        selectedCharacter: action.selectedCharacter
      };
    case(JUMP):
      return {
        height:action.height
      }
    default:
      return state;
  }
}

export default reducer;
