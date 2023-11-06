import axios from "../../../src/utils/axios";
import { API_URL } from "../../utils/constants";
import {
  FETCH_DATA_2_REQUEST,
  FETCH_DATA_2_SUCCESS,
  FETCH_DATA_2_FAILURE,
} from "./types";

export const fetchData2Request = () => ({ type: FETCH_DATA_2_REQUEST });
export const fetchData2Success = (data) => ({
  type: FETCH_DATA_2_SUCCESS,
  payload: data,
});
export const fetchData2Failure = (error) => ({
  type: FETCH_DATA_2_FAILURE,
  payload: error,
});

export const fetchUserProfileData = (id) => {
  return async (dispatch) => {
    dispatch(fetchData2Request());
    axios
      .get(
        "https://a94d-103-250-137-113.ngrok-free.app" +
          API_URL.GET_USER_PROFILE(id)
      )
      .then((response) => {
        dispatch(fetchData2Success(response.data));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchData2Failure(errorMessage));
      });
  };
};
