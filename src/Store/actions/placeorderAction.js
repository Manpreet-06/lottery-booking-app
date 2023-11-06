import axios from "../../../src/utils/axios";
import { API_URL } from "../../utils/constants";
import {
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_FAILURE,
} from "./types";

export const placeOrderRequest = () => ({ type: PLACE_ORDER_REQUEST });
export const placeOrderSuccess = (data) => ({
  type: PLACE_ORDER_SUCCESS,
  payload: data,
});
export const placeOrderFailure = (error) => ({
  type: PLACE_ORDER_FAILURE,
  payload: error,
});

export const placeOrderData = (payload) => {
  return async (dispatch) => {
    dispatch(placeOrderRequest());
    axios
      .post(
        "https://a94d-103-250-137-113.ngrok-free.app" +
          API_URL.PLACE_ORDER(), payload
      )
      .then((response) => {
        console.log(response);
        dispatch(placeOrderSuccess(response.data));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(placeOrderFailure(errorMessage));
      });
  };
};
