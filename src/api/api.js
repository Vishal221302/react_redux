import { fetchUserFailure, fetchUserSuccess, fetchUsersRequest } from "../Redux/All";
import axios from "axios";

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        const errorMeg = error.message;
        dispatch(fetchUserFailure(errorMeg));
      });
  };
};
