import GithubCommitItem from "../../../models/githubCommitItem";
import CommitListResponse from "../interfaces/commitListResponse";
import { getRepoNameFromUrl } from "../../../utils/utils";
import CommitResponse from "../interfaces/commitResponse";
import GithubBranch from "../../../models/githubBranch";
import GithubRepo from "../../../models/githubRepo";

export default function (
  commitList: GithubCommitItem[],
  branchList: GithubBranch[],
  repoList: GithubRepo[]
): CommitListResponse {
  const response: CommitListResponse = {
    repoName: getRepoNameFromUrl(commitList[0].url as string),
    repoOwnerNickname: commitList[0].author.login as string,
    authorName: getValidAuthorName(commitList),
    authorAvatarUrl: getValidAuthorAvatarUrl(commitList),
    commitList: mapCommitList(commitList),
    branches: mapBranchList(branchList),
    repos: mapRepoList(repoList),
  };

  return response;
}

function mapCommitList(commitList: GithubCommitItem[]): CommitResponse[] {
  return commitList.map((item) => {
    return CommitResponse.builder()
      .setCommitDate(item.commit.author.date)
      .setCommitHtmlRepoSnapshotUrl(item.commit.tree.url)
      .setCommitHtmlUrl(item.html_url as string)
      .setCommitMessage(item.commit.message)
      .setCommitterAvatarUrl(item.committer.avatar_url)
      .setCommitterEmail(item.commit.committer.email as string)
      .setCommitterName(item.commit.committer.name)
      .setCommitterNickname(item.committer.login)
      .build();
  });
}

function getValidAuthorName(commitList: GithubCommitItem[]) : string {
  let validAuthorName = '';
  for(let item of commitList){
    if(item.commit.author.name !== 'unknown' && item.commit.author.name !== '') {
      validAuthorName = item.commit.author.name;
      break;
    }
  }
  return validAuthorName;
}

function getValidAuthorAvatarUrl(commitList: GithubCommitItem[]) : string {
  let validAuthorAvatarUrl = '';
  for(let item of commitList){
    if(item.author.avatar_url !== 'unknown' && item.author.avatar_url !== '') {
      validAuthorAvatarUrl = item.author.avatar_url;
      break;
    }
  }
  return validAuthorAvatarUrl;
}

function mapBranchList(branchList: GithubBranch[]): string[] {
  return branchList.map((item) => item.name);
}

function mapRepoList(repoList: GithubRepo[]): GithubRepo[] {
  return repoList.map((item) => {
    return {
      name: item.name,
      html_url: item.html_url,
      description: item.description,
      language: item.language
    }
  });
}
