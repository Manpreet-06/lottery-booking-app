import { combineReducers } from 'redux';
import loginReducer from '../reducers/loginReducer';
import userProfileReducer from "../reducers/userprofileReducer";
import booklistReducer from "../reducers/booklistReducer";
import walletReducer from "../reducers/walletReducer";


const rootReducer = combineReducers({
  loginReducer: loginReducer,
  userProfileReducer: userProfileReducer,
  booklistReducer: booklistReducer,
  walletReducer:walletReducer
});

export default rootReducer;
