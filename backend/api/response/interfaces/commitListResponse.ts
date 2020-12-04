import GithubRepo from "../../../models/githubRepo";
import CommitResponse from "./commitResponse";

export default interface CommitListResponse {
  repoOwnerNickname: string;
  repoName: string;
  branch: string;
  branches: string[];
  commitList: CommitResponse[];
  repos: GithubRepo[]
}
