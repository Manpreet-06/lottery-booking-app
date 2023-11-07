import instance from "../../../src/utils/axios";
import { API_URL } from "../../utils/constants";
import {
  GAMES_DATA_REQUEST,
  GAMES_DATA_SUCCESS,
  GAMES_DATA_FAILURE,
} from "./types";

export const fetchGameDataRequest = () => ({ type: GAMES_DATA_REQUEST });
export const fetchGameDataSuccess = (data) => ({
  type: GAMES_DATA_SUCCESS,
  payload: data,
});
export const fetchGameDataFailure = (error) => ({
  type: GAMES_DATA_FAILURE,
  payload: error,
});

export const fetchGamesData = () => {
  return (dispatch) => {
    dispatch(fetchGameDataRequest());
    instance
      .get(API_URL.GET_GAMES())
      .then((response) => {
        // console.log(response);
        const data = response.data;
        dispatch(fetchGameDataSuccess(data));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchGameDataFailure(errorMessage));
      });
  };
};
