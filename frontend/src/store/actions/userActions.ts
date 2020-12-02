import GithubOperations from "../../api/githubOperations";
import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAIL,
} from "../constants/userConstants";

export const getUser = (nickname: string) => {
  return async (dispatch) => {
    dispatch({ type: USER_REQUEST });
    try {
      const user = await GithubOperations.getUser(nickname);
      dispatch({ type: USER_SUCCESS, payload: user });
    } catch (error) {
      console.error("Failed fetching user from api");
      dispatch({ type: USER_FAIL, payload: error.message });
    }
  };
};
