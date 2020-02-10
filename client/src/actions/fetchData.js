import { fetchDataRequest, fetchDataSuccess, fetchDataError } from "./action";
import Axios from "axios";

export function fetchData() {
  return dispatch => {
    dispatch(fetchDataRequest());

    Axios.get(`http://localhost:5000/api/phones`)
      .then(response => {
        dispatch(fetchDataSuccess(response.data.data));
      })
      .catch(error => {
        dispatch(fetchDataError(error));
      });
  };
}
