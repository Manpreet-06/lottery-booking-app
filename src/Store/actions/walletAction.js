import axios from "axios";
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

export const fetchWalletData = () => {
  return (dispatch) => {
    dispatch(fetchData4Request());
    axios
      .get(
        "https://8330-2401-4900-1f3f-840f-4976-476c-fae5-9ff4.ngrok-free.app/api/wallet/getBalance/653dec2f5068cfd79e725f9e", {headers: {
            "Content-Type": "application/json"}
        }
      )
      .then((response) => {
        console.log(response);
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
