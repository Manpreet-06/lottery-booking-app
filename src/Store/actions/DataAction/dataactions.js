// actions/dataActions.js
import axios from "axios";
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "../types";

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

export const fetchData = () => {
  const payload = {
    email: "aroramanpreet316@gmail.com",
    password: "Admin@123",
  };
  return (dispatch) => {
    dispatch(fetchDataRequest());

    axios
      .post(
        "https://b899-2401-4900-1f3f-840f-78b1-594e-d6f6-a31.ngrok-free.app/api/profile/653dfb643f57fdebb69bcbff",
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
