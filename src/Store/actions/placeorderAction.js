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

export const fetchUserProfileData = (id) => {
  return async (dispatch) => {
    dispatch(placeOrderRequest());
    axios
      .get(
        "https://1e9b-2401-4900-1f3f-840f-f8ce-a315-2985-3c26.ngrok-free.app" +
          API_URL.PLACE_ORDER()
      )
      .then((response) => {
        dispatch(placeOrderSuccess(response.data));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(placeOrderFailure(errorMessage));
      });
  };
};
