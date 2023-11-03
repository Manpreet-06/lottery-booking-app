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

export const fetchUserProfileData = (id) => {
  return async (dispatch) => {
    dispatch(gameResultRequest());
    axios
      .get(
        "https://1e9b-2401-4900-1f3f-840f-f8ce-a315-2985-3c26.ngrok-free.app" +
          API_URL.GAME_RESULT()
      )
      .then((response) => {
        dispatch(gameResultRequest(response.data));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(gameResultRequest(errorMessage));
      });
  };
};
