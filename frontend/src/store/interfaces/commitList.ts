import Commit from "./commit";

export default interface CommitList {
  repoOwnerNickname: string;
  repoName: string;
  branches: string[];
  commitList: Commit[];
}
