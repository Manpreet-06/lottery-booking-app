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

export const fetchUserProfileData = () => {
  const payload = {
    email: "akshaychavda@gmail.com",
    password: "Admin@123",
  };
  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios
      .get(
        "https://jsonplaceholder.typicode.com/todos",
      )
      .then((response) => {
        console.log(response);
        const data = response.data;
        dispatch(fetchDataSuccess(data));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchDataFailure(errorMessage));
      });
  };
};
