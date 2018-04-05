import { combineReducers } from 'redux';

import authenticationReducer from './authenticationReducer';
import cardsReducers from './cardsReducer';

export default combineReducers({
  auth: authenticationReducer,
  cards: cardsReducers,
});
