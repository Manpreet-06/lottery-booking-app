import axios from "../../../src/utils/axios";
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
    axios
      .get(
        "https://df73-2401-4900-1f3f-840f-edcf-13dc-97d3-b8fb.ngrok-free.app" +
          API_URL.GET_GAMES()
      )
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
