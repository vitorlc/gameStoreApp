import { ADD_ITEM } from '../actions/actionTypes'

const initialState = {
  gamesCart: []
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: 
      return {...state, gamesCart: [...state.gamesCart, action.item]}
    default: 
      return state
  }
}