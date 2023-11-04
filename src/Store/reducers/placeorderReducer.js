import {
  PLACE_ORDER_FAILURE,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_REQUEST,
} from "../actions/types";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const placeOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLACE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PLACE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case PLACE_ORDER_FAILURE:
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

export default placeOrderReducer;
