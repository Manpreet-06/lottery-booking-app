import instance from "../../../src/utils/axios";
import { API_URL } from "../../utils/constants";
import {
  FETCH_DATA_4_REQUEST,
  FETCH_DATA_4_SUCCESS,
  FETCH_DATA_4_FAILURE,
} from "./types";

export const fetchData4Request = () => ({ type: FETCH_DATA_4_REQUEST });
export const fetchData4Success = (data) => ({
  type: FETCH_DATA_4_SUCCESS,
  payload: data,
});
export const fetchData4Failure = (error) => ({
  type: FETCH_DATA_4_FAILURE,
  payload: error,
});

export const fetchWalletData = (id) => {
  return (dispatch) => {
    dispatch(fetchData4Request());
    instance
      .get(API_URL.GET_BALANCE(id), {headers: {
            "Content-Type": "application/json"}
        }
      )
      .then((response) => {
      //  const data =response.data.headers['Content-Type'];
        const data = response.data;
        dispatch(fetchData4Success(data));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchData4Failure(errorMessage));
      });
  };
};
