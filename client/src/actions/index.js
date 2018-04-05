import axios from 'axios';

import { FETCH_USER, FETCH_CARDS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
};

export const fetchCards = () => async dispatch => {
  const res = await axios.get('/api/cards');

  dispatch({
    type: FETCH_CARDS,
    payload: res.data,
  });
};
