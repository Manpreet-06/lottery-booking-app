import { combineReducers } from "redux";
import loginReducer from "../reducers/loginReducer";
import userProfileReducer from "../reducers/userprofileReducer";
import booklistReducer from "../reducers/booklistReducer";
import walletReducer from "../reducers/walletReducer";
import gameReducer from "./gameReducer";
import placeOrderReducer from "./placeorderReducer";

const rootReducer = combineReducers({
  loginReducer: loginReducer,
  userProfileReducer: userProfileReducer,
  booklistReducer: booklistReducer,
  walletReducer: walletReducer,
  gameReducer: gameReducer,
  placeOrderReducer: placeOrderReducer,
  gameReducer: gameReducer,
});

export default rootReducer;
