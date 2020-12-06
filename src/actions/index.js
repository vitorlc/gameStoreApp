import { ADD_ITEM, REMOVE_ITEM, CHANGE_ORDER } from './actionTypes'

export const addItemCart = value => ({
  type: ADD_ITEM,
  item: value
});

export const removeItemCart = value => ({
  type: REMOVE_ITEM,
  item: value
})

export const changeOrderCart = value => ({
  type: CHANGE_ORDER,
  newOrder: value
})