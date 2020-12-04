import GitRepoService from "../gitRepoService";
import Container, { Service } from "typedi";
import GithubRepoOperations from "../../integration/github/repoOperations";
import GithubCommitItem from "../../models/githubCommitItem";
import commitListResponseMapper from "../../api/response/mappers/commitListResponseMapper";
import GithubBranch from "../../models/githubBranch";
import { Logger } from "winston";
import config from "../../config";
import GithubRepo from "../../models/githubRepo";
import CommitListResponse from '../../api/response/interfaces/commitListResponse';

@Service()
export default class GitRepoServiceImpl implements GitRepoService {
  private githubRepoOperations = Container.get(GithubRepoOperations);
  private logger: Logger = Container.get(config.dependencyInjection.logger);

  public async getCommitListByOwnerAndRepoAndBranch(
    owner: string,
    reponame: string,
    branch: string
  ) : Promise<CommitListResponse | {}>{

    const responseRepoList: GithubRepo[] = await this.githubRepoOperations.getReposByOwner(
      owner
    );
    if(reponame === 'xxx' && responseRepoList.length > 0){//if no reponame is provided, assign the first repo fetched from API
      reponame = responseRepoList[0].name;
    }
    this.logger.info(`Repo List retrieved contains ${responseRepoList.length} elements.`);

    const responseCommitList: GithubCommitItem[] = await this.githubRepoOperations.getCommitListByOwnerAndRepoAndBranch(
      owner,
      reponame,
      branch
    );
    this.logger.info(`Commit List retrieved contains ${responseCommitList.length} elements.`);

    const responseBranchList: GithubBranch[] = await this.githubRepoOperations.getBranchesByOwnerAndRepo(
      owner,
      reponame
    );
    this.logger.info(`Branch List retrieved contains ${responseBranchList.length} elements.`);
 

    const additionalInfo = {branch, reponame}
    return commitListResponseMapper(additionalInfo, responseCommitList, responseBranchList, responseRepoList);
  }
}
