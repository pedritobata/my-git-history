import GitService from "../gitService";
import Container, { Service } from "typedi";
import GithubOperations from "../../integration/github/operations";
import GithubCommitItem from "../../models/githubCommitItem";
import commitListResponseMapper from "../../api/response/mappers/commitListResponseMapper";
import Branch from "../../models/githubBranch";

@Service()
export default class GitServiceImpl implements GitService {
  private githubOperations = Container.get(GithubOperations);

  public async getCommitListByOwnerAndRepoAndBranch(
    owner: string,
    reponame: string,
    branch: string
  ) {
    const responseCommitList: GithubCommitItem[] = await this.githubOperations.getCommitListByOwnerAndRepoAndBranch(
      owner,
      reponame,
      branch
    );
    const responseBranchList: Branch[] = await this.githubOperations.getBranchesByOwnerAndRepo(
      owner,
      reponame
    );

    if (!responseCommitList || responseCommitList.length === 0) {
      throw new Error("No commits found for this repo");
    }
    return commitListResponseMapper(responseCommitList, responseBranchList);
  }
}
