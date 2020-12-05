import { ADD_ITEM } from './actionTypes'

export const addItemCart = value => ({
  type: ADD_ITEM,
  item: value
});