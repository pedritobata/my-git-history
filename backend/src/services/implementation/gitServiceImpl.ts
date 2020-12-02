import GitService from "../gitService";
import Container, { Service } from "typedi";
import GithubOperations from "../../integration/github/operations";
import GithubCommitItem from "../../models/githubCommitItem";
import commitListResponseMapper from "../../api/response/mappers/commitListResponseMapper";
import Branch from "../../models/githubBranch";
import { Logger } from "winston";
import config from "../../config";
import GithubRepo from "../../models/githubRepo";
import { response } from "express";

@Service()
export default class GitServiceImpl implements GitService {
  private githubOperations = Container.get(GithubOperations);
  private logger: Logger = Container.get(config.dependencyInjection.logger);

  public async getCommitListByOwnerAndRepoAndBranch(
    owner: string,
    reponame: string,
    branch: string
  ) {

    const responseRepoList: GithubRepo[] = await this.githubOperations.getReposByOwner(
      owner
    );
    if(reponame === 'xxx'){//if no reponame is provided, assign the first repo fetched from API
      reponame = responseRepoList[0].name;
    }
    this.logger.info(
      `Repo List retrieved contains ${responseRepoList.length} elements.`
    );
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
 

    if (!responseCommitList || responseCommitList.length === 0) {
      this.logger.error("No commits found for this repo");
      throw new Error("No commits found for this repo");
    }
    const additionalInfo = {branch, reponame}
    return commitListResponseMapper(additionalInfo, responseCommitList, responseBranchList, responseRepoList);
  }
}
