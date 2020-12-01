import GitService from "../gitService";
import Container, { Service } from "typedi";
import GithubOperations from "../../integration/github/operations";
import GithubCommitItem from "../../models/githubCommitItem";
import commitListResponseMapper from "../../api/response/mappers/commitListResponseMapper";
import Branch from "../../models/githubBranch";
import { Logger } from "winston";
import config from "../../config";
import GithubRepo from "../../models/githubRepo";

@Service()
export default class GitServiceImpl implements GitService {
  private githubOperations = Container.get(GithubOperations);
  private logger: Logger = Container.get(config.dependencyInjection.logger);

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
    this.logger.info(
      `Commit List retrieved contains ${responseCommitList.length} elements.`
    );
    const responseBranchList: Branch[] = await this.githubOperations.getBranchesByOwnerAndRepo(
      owner,
      reponame
    );
    this.logger.info(
      `Branch List retrieved contains ${responseBranchList.length} elements.`
    );
    const responseRepoList: GithubRepo[] = await this.githubOperations.getReposByOwner(
      owner
    );
    this.logger.info(
      `Repo List retrieved contains ${responseRepoList.length} elements.`
    );

    if (!responseCommitList || responseCommitList.length === 0) {
      this.logger.error("No commits found for this repo");
      throw new Error("No commits found for this repo");
    }
    return commitListResponseMapper(responseCommitList, responseBranchList, responseRepoList);
  }
}
