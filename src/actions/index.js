import { ADD_ITEM, CHANGE_ORDER } from './actionTypes'

export const addItemCart = value => ({
  type: ADD_ITEM,
  item: value
});

export const changeOrderCart = value => ({
  type: CHANGE_ORDER,
  newOrder: value
})