import axios from 'axios';

export const FETCH_ITEMS_START = 'FETCH_ITEMS_START';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';
export const DELETE_ITEM_START = 'DELETE_ITEM_START';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const DELETE_ITEM_FAILURE = 'DELETE_ITEM_FAILURE';

export const getItems = () => dispatch => {
  dispatch({ type: FETCH_ITEMS_START });
  axios
    .get('http://localhost:3333/items')
    .then(response =>
      dispatch({ type: FETCH_ITEMS_SUCCESS, payload: response.data })
    )
    .catch(error => dispatch({ type: FETCH_ITEMS_FAILURE, payload: error }));
  //     this.setState({ items: data });
};

export const deleteItem = id => dispatch => {
  dispatch({ type: DELETE_ITEM_START });
  return axios
    .delete(`http://localhost:3333/items/${id}`)
    .then(response => {
      dispatch({ type: DELETE_ITEM_SUCCESS, payload: response.data });
    })
    .catch(error => dispatch({ type: DELETE_ITEM_FAILURE, payload: error }));
};
