import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAIL,
} from "../constants/userConstants";
import UserState from '../interfaces/userState';

const initialState: UserState = {
  user: {
   name: "",
   login: "",
   avatar_url: ""
  },
  error: "",
  loading: true,
};

export function getUserReducer(
  state: UserState = initialState,
  action
) {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: ''
      };
    case USER_FAIL:
      return {
        ...state,
        loading: false,
        user: {},
        error: action.payload
      };
    default:
      return state;
  }
}

