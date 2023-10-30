import { FETCH_DATA_2_REQUEST, FETCH_DATA_2_SUCCESS, FETCH_DATA_2_FAILURE } from '../actions/types';

const initialState = {
  loading: false,
  data: null,
  error: null
};

const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DATA_2_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_DATA_2_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ''
      };
    case FETCH_DATA_2_FAILURE:
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

export default loginReducer;
