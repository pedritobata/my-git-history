import GihubUser from "../../../interfaces/githubUser";
import UserResponse from '../interfaces/userResponse';

export default function (
 user: GihubUser
): UserResponse {
  if(Object.keys(user).length === 0){
    return {};
  }
  const response: UserResponse = {
    name: user.name,
    login: user.login,
    avatar_url: user.avatar_url
  };

  return response;
}

