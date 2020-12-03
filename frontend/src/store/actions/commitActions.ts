import GithubOperations from "../../api/githubOperations";
import {
  COMMIT_LIST_REQUEST,
  COMMIT_LIST_SUCCESS,
  COMMIT_LIST_FAIL,
} from "../constants/commitConstants";
import { getUser } from "./userActions";

export const listCommits = (owner: string, repo: string, branch: string) => {
  return async (dispatch) => {
    dispatch({ type: COMMIT_LIST_REQUEST });
    try {
      const commits = await GithubOperations.getCommitList(owner, repo, branch);
      if(commits.commitList.length === 0){
        throw new Error("No commits were found.");
      }
      await dispatch({ type: COMMIT_LIST_SUCCESS, payload: commits });
      dispatch(getUser(owner));
    } catch (error) {
      console.error("Failed fetching commit list from api");
      dispatch({ type: COMMIT_LIST_FAIL, payload: error.message });
    }
  };
};
