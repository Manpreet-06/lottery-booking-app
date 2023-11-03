import axios from "../../../src/utils/axios";
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

export const walletHistoryData = () => {
  return (dispatch) => {
    dispatch(walletHistoryRequest());
    axios
      .get(
        "https://f1ee-2401-4900-1f3f-840f-edcf-13dc-97d3-b8fb.ngrok-free.app/api/wallet/walletHistory/653dec2f5068cfd79e725f9e"
      )
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
