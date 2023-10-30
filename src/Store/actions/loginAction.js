// actions/dataActions.js
import axios from "axios";
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "./types";

export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};

export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchDataFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  };
};

export const fetchLoginData = (payload) => {
  return (dispatch) => {
    dispatch(fetchDataRequest());

    axios
      .post(
        "https://8330-2401-4900-1f3f-840f-4976-476c-fae5-9ff4.ngrok-free.app/api/login",
        payload
      )
      .then((response) => {
        const data = response.data;
        dispatch(fetchDataSuccess(data));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchDataFailure(errorMessage));
      });
  };
};
