import {
  COMMIT_LIST_REQUEST,
  COMMIT_LIST_SUCCESS,
  COMMIT_LIST_FAIL,
} from "../constants/commitConstants";


export const listCommits = (owner: string, repo: string, branch: string) => {
    return async dispatch => {
        dispatch({type: COMMIT_LIST_REQUEST});
        const response = 
    }
}