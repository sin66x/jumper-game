export const SELECT_CHARACTER = 'SELECT_CHARACTER'

export function selectCharacter(selected) {
   return {
      type: SELECT_CHARACTER,
      selectedCharacter: selected
   };
}
