import {GAME_RESULT_REQUEST, GAME_RESULT_SUCCESS, GAME_RESULT_FAILURE } from '../actions/types';

const initialState = {
  loading: false,
  data: null,
  error: null
};

const gameResultReducer = (state = initialState, action) => {
  switch(action.type) {
    case GAME_RESULT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GAME_RESULT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ''
      };
    case GAME_RESULT_FAILURE:
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

export default gameResultReducer;
