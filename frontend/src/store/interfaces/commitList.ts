import Commit from "./commit";

export default interface CommitList {
  repoOwnerNickname: string;
  repoName: string;
  repos: any;
  branch: string;
  branches: string[];
  commitList: Commit[];
}
