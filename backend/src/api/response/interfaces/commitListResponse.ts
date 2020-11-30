import CommitResponse from "./commitResponse";

export default interface CommitListResponse {
  repoOwnerNickname: string;
  repoName: string;
  branches: string[];
  commitList: CommitResponse[];
}
