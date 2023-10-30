import axios from "../../../src/utils/axios";
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

export const fetchUserProfileData = () => {
  return (dispatch) => {
    dispatch(fetchData2Request());
    axios
      .get(
        "https://8330-2401-4900-1f3f-840f-4976-476c-fae5-9ff4.ngrok-free.app/api/profile/653dfb643f57fdebb69bcbff",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
        const data = response.data;
        dispatch(fetchData2Success(data));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchData2Failure(errorMessage));
      });
  };
};
