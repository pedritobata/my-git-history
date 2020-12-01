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
      .setCommitterAvatarUrl(item.author.avatar_url)
      .setCommitterEmail(item.commit.author.email as string)
      .setCommitterName(item.commit.author.name)
      .setCommitterNickname(item.committer.login)
      .build();
  });
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
