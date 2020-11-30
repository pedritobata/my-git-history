import { getCommitListConfig, getBranchesConfig } from "./config";
import { Container, Service } from "typedi";
import config from "../../config";
import { AxiosInstance, AxiosRequestConfig } from "axios";
import { Logger } from "winston";

@Service()
export default class GithubOperations {
  private logger: Logger = Container.get(config.dependencyInjection.logger);
  private axios: AxiosInstance = Container.get(
    config.dependencyInjection.axios
  );

  public async getCommitListByOwnerAndRepoAndBranch(
    owner: string,
    repoName: string,
    branch: string = "master"
  ) {
    const url = getCommitListConfig(owner, repoName).endpointUrl;
    const axiosConfig: AxiosRequestConfig = { params: { sha: branch } };
    let data = null;
    try {
      const response = await this.axios.get(url, axiosConfig);
      data = response.data;
    } catch (error) {
      this.logger.error(error);
      throw new Error(`Github commits API failed: ${error}`);
    }

    return data;
  }

  public async getBranchesByOwnerAndRepo(owner: string, repo: string) {
    const url = getBranchesConfig(owner, repo).endpointUrl;
    let data = null;
    try {
      const response = await this.axios.get(url);
      data = response.data;
    } catch (error) {
      this.logger.error(error);
      throw new Error(`Github branches API failed: ${error}`);
    }

    return data;
  }
}
