import instance from "../../../src/utils/axios";
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

export const gameResultData = (id) => {
  console.log(id);
  return async (dispatch) => {
    dispatch(gameResultRequest());
    instance
      .get(API_URL.GAME_RESULT(id))
      .then((response) => {
        dispatch(gameResultSuccess(response));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(gameResultFailure(errorMessage));
      });
  };
};
