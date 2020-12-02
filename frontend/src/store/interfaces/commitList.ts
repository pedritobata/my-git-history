import Commit from "./commit";

export default interface CommitList {
  repoOwnerNickname: string;
  repoName: string;
  authorName: string;
  authorAvatarUrl: string;
  branches: string[];
  commitList: Commit[];
}
