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

export const placeOrderData = () => {
  return async (dispatch) => {
    dispatch(placeOrderRequest());
    axios
      .post(
        "https://df73-2401-4900-1f3f-840f-edcf-13dc-97d3-b8fb.ngrok-free.app" +
          API_URL.PLACE_ORDER()
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
