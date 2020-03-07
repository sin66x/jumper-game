import {SELECT_CHARACTER} from '../actions/actions.js'


const initialState = {
  selectedCharacter :0
};

const reducer = (state = initialState , action) => {
  switch (action.type) {
    case(SELECT_CHARACTER):
      alert('Hiiiii'+action.selectedCharacter+JSON.stringify(state));
      return { 
        selectedCharacter: action.selectedCharacter
      };
    default:
      return state;
  }
}

export default reducer;
