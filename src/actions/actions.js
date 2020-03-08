export const SELECT_CHARACTER = 'SELECT_CHARACTER'
export const JUMP = 'JUMP'

export function selectCharacter(selected) {
   return {
      type: SELECT_CHARACTER,
      selectedCharacter: selected
   };
}

export function jump(h) {
  return {
    type: JUMP,
    height:h
  };
}
