import GithubOperations from "../../api/githubOperations";
import {
  COMMIT_LIST_REQUEST,
  COMMIT_LIST_SUCCESS,
  COMMIT_LIST_FAIL,
} from "../constants/commitConstants";

export const listCommits = (owner: string, repo: string, branch: string) => {
  return async (dispatch) => {
    dispatch({ type: COMMIT_LIST_REQUEST });
    try {
      const commits = await GithubOperations.getCommitList(owner, repo, branch);
      dispatch({ type: COMMIT_LIST_SUCCESS, payload: commits });
    } catch (error) {
      console.error("Failed fetching commit list from api");
      dispatch({ type: COMMIT_LIST_FAIL, payload: error.message });
    }
  };
};
