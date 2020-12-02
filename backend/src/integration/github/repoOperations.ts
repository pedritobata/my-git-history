import { getCommitListConfig, getBranchesConfig, getReposConfig } from "./config";
import { Container, Service } from "typedi";
import config from "../../config";
import { AxiosInstance, AxiosRequestConfig } from "axios";
import { Logger } from "winston";

@Service()
export default class GithubRepoOperations {
  private logger: Logger = Container.get(config.dependencyInjection.logger);
  private axios: AxiosInstance = Container.get(
    config.dependencyInjection.axios
  );

  public async getCommitListByOwnerAndRepoAndBranch(
    owner: string,
    repoName: string,
    branch: string = "master"
  ) {
    let data = null;
    try {
      const response = await this.axios(<AxiosRequestConfig>getCommitListConfig(owner, repoName,branch));
      data = response.data;
    } catch (error) {
      this.logger.error(error);
      throw new Error(`Github commits API operation failed: ${error}`);
    }

    return data;
  }

  public async getBranchesByOwnerAndRepo(owner: string, repo: string) {
    let data = null;
    try {
      const response = await this.axios(<AxiosRequestConfig>getBranchesConfig(owner,repo));
      data = response.data;
    } catch (error) {
      this.logger.error(error);
      throw new Error(`Github branches API operation failed: ${error}`);
    }

    return data;
  }


  public async getReposByOwner(owner: string) {
    let data = null;
    try {
      const response = await this.axios(<AxiosRequestConfig>getReposConfig(owner));
      data = response.data;
    } catch (error) {
      this.logger.error(error);
      throw new Error(`Github repos API operation failed: ${error}`);
    }

    return data;
  }


}
