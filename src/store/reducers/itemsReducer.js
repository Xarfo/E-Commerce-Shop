import {
  FETCH_ITEMS_START,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  ADD_ITEM_START,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  DELETE_ITEM_START,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE
} from '../actions';

const initialState = {
  items: [],
  isAddingItem: false
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        isAddingItem: false,
        error: '',
        items: action.payload
      };
    case DELETE_ITEM_SUCCESS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};

export default items;
