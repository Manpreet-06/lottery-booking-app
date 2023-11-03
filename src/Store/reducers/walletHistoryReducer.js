import {
  WALLET_HISTORY_REQUEST,
  WALLET_HISTORY_SUCCESS,
  WALLET_HISTORY_FAILURE,
} from "../actions/types";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const walletHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case WALLET_HISTORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case WALLET_HISTORY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case WALLET_HISTORY_FAILURE:
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

export default walletHistoryReducer;
