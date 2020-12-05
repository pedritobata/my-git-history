import CommitList from "../store/interfaces/commitList";
import axios from "../utils/axios";
import User from '../store/interfaces/user';

export default class GithubOperations {
  public static async getCommitList(
    owner: string,
    repo: string,
    branch: string
  ) : Promise<CommitList>{
    let commitList: Promise<CommitList> | null = null;
    const response = await axios.get(
      `/api/github-repos/${owner}/${repo}/commits?sha=${branch}`
    );
    commitList = response.data as Promise<CommitList>;

    return commitList;
  }

  public static async getUser(
    nickname: string,
  ) : Promise<User>{
    let user: Promise<User> | null = null;
    const response = await axios.get(
      `/api/github-users/${nickname}`
    );
    user = response.data as Promise<User>;

    return user;
  }
}


