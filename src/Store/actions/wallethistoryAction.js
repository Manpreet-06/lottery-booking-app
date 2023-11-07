import instance from "../../../src/utils/axios";
import { API_URL } from "../../utils/constants";
import {
  WALLET_HISTORY_REQUEST,
  WALLET_HISTORY_SUCCESS,
  WALLET_HISTORY_FAILURE,
} from "./types";

export const walletHistoryRequest = () => ({ type: WALLET_HISTORY_REQUEST });
export const walletHistorySuccess = (data) => ({
  type: WALLET_HISTORY_SUCCESS,
  payload: data,
});
export const walletHistoryFailure = (error) => ({
  type: WALLET_HISTORY_FAILURE,
  payload: error,
});

export const walletHistoryData = (id) => {
  return (dispatch) => {
    dispatch(walletHistoryRequest());
    instance
      .get(API_URL.GET_WALLETHISTORY(id))
      .then((response) => {
        // console.log(response);
        const data = response.data;
        dispatch(walletHistorySuccess(data));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(walletHistoryFailure(errorMessage));
      });
  };
};
