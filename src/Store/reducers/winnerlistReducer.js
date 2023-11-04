import {WINNER_LIST_REQUEST, WINNER_LIST_SUCCESS, WINNER_LIST_FAILURE } from '../actions/types';

const initialState = {
  loading: false,
  data: null,
  error: null
};

const winnerlistReducer = (state = initialState, action) => {
  switch(action.type) {
    case WINNER_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case WINNER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ''
      };
    case WINNER_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default winnerlistReducer;
