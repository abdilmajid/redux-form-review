


const initialState = {
  a: 20
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD':
      return {
        ...state,
        a: state.a +=1
      }  
    default:
      return state;  
  }
}

export default reducer;