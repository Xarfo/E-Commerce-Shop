import axios from 'axios';

export const ADD_ITEM_START = 'ADD_ITEM_START';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

export const addItem = item => dispatch => {
  dispatch({ type: ADD_ITEM_START });
  axios
    .post('http://localhost:3333/items', item)
    .then(response => {
      dispatch({ type: ADD_ITEM_SUCCESS, payload: response.data });
    })
    .catch(error => dispatch({ type: ADD_ITEM_FAILURE, payload: error }));
};
