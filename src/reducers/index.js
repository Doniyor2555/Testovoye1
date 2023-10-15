const initialState = {
  heroes: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_HEROES":
      return {
        ...state,
        heroes: action.payload
      }
      default: return state
  }
}

export default reducer;