import Commits from "../../pages/commits/Commits";
import {
  COMMIT_LIST_REQUEST,
  COMMIT_LIST_SUCCESS,
  COMMIT_LIST_FAIL,
} from "../constants/commitConstants";
import CommitsState from "../interfaces/commitsState";

const initialState: CommitsState = {
  commitList: {
    branches: [],
    commitList: [],
    repoName: "",
    repoOwnerNickname: "",
    authorName: "",
    authorAvatarUrl: ""
  },
  error: "",
  loading: true,
};

export function listCommitsReducer(
  state: CommitsState = initialState,
  action
) {
  switch (action.type) {
    case COMMIT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COMMIT_LIST_SUCCESS:
      return {
        ...state,
        commitList: action.payload,
        loading: false,
        error: ''
      };
    case COMMIT_LIST_FAIL:
      return {
        ...state,
        loading: false,
        commitList: {},
        error: action.payload
      };
    default:
      return state;
  }
}
