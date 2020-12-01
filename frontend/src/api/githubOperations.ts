import { AxiosResponse } from "axios";
import CommitList from "../store/interfaces/commitList";
import axios from "../utils/axios";

export default class GithubOperations {
  public static async getCommitList(
    owner: string,
    repo: string,
    branch: string
  ) {
    let commitList = null;
    const response = await axios.get(
      `/api/github-repos/${owner}/${repo}/commits?sha=${branch}`
    );
    commitList = response.data;
    console.log("commitList >>>", commitList);

    return commitList;
  }
}
