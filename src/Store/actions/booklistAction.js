import axios from "../../../src/utils/axios";
import { API_URL } from "../../utils/constants";
import {
  FETCH_DATA_3_REQUEST,
  FETCH_DATA_3_SUCCESS,
  FETCH_DATA_3_FAILURE,
} from "./types";

export const fetchData3Request = () => ({ type: FETCH_DATA_3_REQUEST });
export const fetchData3Success = (data) => ({
  type: FETCH_DATA_3_SUCCESS,
  payload: data,
});
export const fetchData3Failure = (error) => ({
  type: FETCH_DATA_3_FAILURE,
  payload: error,
});

export const booklistData = () => {
  return (dispatch) => {
    dispatch(fetchData3Request());
    axios
      .get(
        "https://a94d-103-250-137-113.ngrok-free.app" +
          API_URL.GET_BOOKLIST()
      )
      .then((response) => {
        // console.log(response);
        const data = response.data;
        dispatch(fetchData3Success(data));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchData3Failure(errorMessage));
      });
  };
};
