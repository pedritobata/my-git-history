import UserResponse from '../api/response/interfaces/userResponse';

export default interface GitRepoService {
  getUserByNickname(
    nickName: string,
  ): Promise<UserResponse | null>;
}
