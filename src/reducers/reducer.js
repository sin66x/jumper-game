import {SELECT_CHARACTER} from '../actions/actions.js'


const initialState = {
  selectedCharacter :0
};

const reducer = (state = initialState , action) => {
  switch (action.type) {
    case(SELECT_CHARACTER):
      return { 
        selectedCharacter: action.selectedCharacter
      };
    default:
      return state;
  }
}

export default reducer;
