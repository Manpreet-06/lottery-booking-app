import axios from "axios";
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
        "https://8330-2401-4900-1f3f-840f-4976-476c-fae5-9ff4.ngrok-free.app/api/book/addBook"
      )
      .then((response) => {
        console.log(response);
        const data = response.data;
        dispatch(fetchData3Success(data));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchData3Failure(errorMessage));
      });
  };
};
