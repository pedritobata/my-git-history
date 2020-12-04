import {
  getCommitListConfig,
  getBranchesConfig,
  getReposConfig,
} from "./config";
import { Container, Service } from "typedi";
import config from "../../config";
import { AxiosInstance, AxiosRequestConfig } from "axios";
import { Logger } from "winston";
import { response } from "express";

@Service()
export default class GithubRepoOperations {
  private logger: Logger = Container.get(config.dependencyInjection.logger);
  private axios: AxiosInstance = Container.get(
    config.dependencyInjection.axios
  );

  /**
   * This method fetches the commits registered for a specific owner, repo and branch by invoking the Github API
   * @param owner - username in github
   * @param repoName - name of the desired repo
   * @param branch - name of the desired branch
   */
  public async getCommitListByOwnerAndRepoAndBranch(
    owner: string,
    repoName: string,
    branch: string = "master"
  ) {
    let data = [];
      const response = await this.axios(
        <AxiosRequestConfig>getCommitListConfig(owner, repoName, branch)
      ).catch((err) =>
        this.logger.error("Fetching Commit list operation Failed >>>", err)
      );
      if(response.data){
        data = response.data; 
      }

    return data;
  }

  /**
   * This method fetches the branches registered for a specific owner and repo by invoking the Github API
   * @param owner 
   * @param repo 
   */
  public async getBranchesByOwnerAndRepo(owner: string, repo: string) {
    let data = [];
      const response = await this.axios(
        <AxiosRequestConfig>getBranchesConfig(owner, repo)
      ).catch((err) =>
        this.logger.error("Fetching Branches operation Failed >>>",err)
      );
      if(response.data){
        data = response.data; 
      }

    return data;
  }

  /**
   * This method fetches the repos registered for a specific owner by invoking the Github API
   * @param owner 
   */
  public async getReposByOwner(owner: string) {
    let data = [];
    const response = await this.axios(
      <AxiosRequestConfig>getReposConfig(owner)
    ).catch((err) => this.logger.error("Fetching Repos operation Failed >>>", err));
    if(response.data){
      data = response.data; 
    }

    return data;
  }
}
