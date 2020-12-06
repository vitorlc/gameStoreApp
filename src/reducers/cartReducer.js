import { ADD_ITEM, REMOVE_ITEM, CHANGE_ORDER } from '../actions/actionTypes'

const initialState = {
  orderBy: {
    name: 'Populariedade',
    key: 'score'
  },
  gamesCart: []
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: 
      return {...state, gamesCart: [...state.gamesCart, action.item]}
    case REMOVE_ITEM:
      return {...state, gamesCart: [...state.gamesCart.filter(item => item.id !== action.item.id)]}
    case CHANGE_ORDER:
      return {...state, orderBy: action.newOrder}
    default: 
      return state
  }
}