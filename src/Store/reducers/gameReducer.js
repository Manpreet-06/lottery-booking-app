import {
  GAMES_DATA_REQUEST,
  GAMES_DATA_SUCCESS,
  GAMES_DATA_FAILURE,
} from "../actions/types";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GAMES_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GAMES_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case GAMES_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default gameReducer;
