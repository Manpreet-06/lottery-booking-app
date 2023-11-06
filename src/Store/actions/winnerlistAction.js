import axios from "../../../src/utils/axios";
import { API_URL } from "../../utils/constants";
import {
  WINNER_LIST_REQUEST,
  WINNER_LIST_SUCCESS,
  WINNER_LIST_FAILURE,
} from "./types";

export const winnerListRequest = () => ({ type: WINNER_LIST_REQUEST });
export const winnerListSuccess = (data) => ({
  type: WINNER_LIST_SUCCESS,
  payload: data,
});
export const winnerListFailure = (error) => ({
  type: WINNER_LIST_FAILURE,
  payload: error,
});

export const winnerListData = () => {
  return (dispatch) => {
    dispatch(winnerListRequest());
    axios
      .get(
       "https://a94d-103-250-137-113.ngrok-free.app" + API_URL.WINNER_LIST()
      )
      .then((response) => {
        // console.log(response);
        const data = response.data;
        dispatch(winnerListSuccess(data));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(winnerListFailure(errorMessage));
      });
  };
};
