import axios from "../../../src/utils/axios";
import { API_URL } from "../../utils/constants";
import {
  GAME_RESULT_REQUEST,
  GAME_RESULT_SUCCESS,
  GAME_RESULT_FAILURE,
} from "./types";

export const gameResultRequest = () => ({ type: GAME_RESULT_REQUEST });
export const gameResultSuccess = (data) => ({
  type: GAME_RESULT_SUCCESS,
  payload: data,
});
export const gameResultFailure = (error) => ({
  type: GAME_RESULT_FAILURE,
  payload: error,
});

export const gameResultData = () => {
  return async (dispatch) => {
    dispatch(gameResultRequest());
    axios
      .get(
        "https://a94d-103-250-137-113.ngrok-free.app" +
          API_URL.GAME_RESULT()
      )
      .then((response) => {
        dispatch(gameResultSuccess(response));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(gameResultFailure(errorMessage));
      });
  };
};
