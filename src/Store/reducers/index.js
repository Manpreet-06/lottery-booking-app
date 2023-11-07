import { combineReducers } from "redux";
import loginReducer from "../reducers/loginReducer";
import userProfileReducer from "../reducers/userprofileReducer";
import booklistReducer from "../reducers/booklistReducer";
import walletReducer from "../reducers/walletReducer";
import gameReducer from "./gameReducer";
import placeOrderReducer from "./placeorderReducer";
import gameresultReducer from "./gameresultReducer";
import walletHistoryReducer from "./walletHistoryReducer";
import winnerlistReducer from "./winnerlistReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  loginReducer: loginReducer,
  userProfileReducer: userProfileReducer,
  booklistReducer: booklistReducer,
  walletReducer: walletReducer,
  gameReducer: gameReducer,
  placeOrderReducer: placeOrderReducer,
  gameReducer: gameReducer,
  gameresultReducer: gameresultReducer,
  walletHistoryReducer: walletHistoryReducer,
  winnerlistReducer: winnerlistReducer,
  authReducer: authReducer
});

export default rootReducer;
