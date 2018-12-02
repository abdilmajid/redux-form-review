const initialState = {
  b: 20
}

const reducer1 = (state = initialState, action) => {
  switch(action.type) {
    case 'SUBTRACT':
      return {
        ...state,
        b: state.b -=1
    }
    default: 
      return state;
}}

export default reducer1;