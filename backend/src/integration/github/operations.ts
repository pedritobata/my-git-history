import { getCommitListConfig } from "./config";
import { Container, Service } from "typedi";
import config from "../../config";
import { AxiosInstance, AxiosRequestConfig } from "axios";
import { Logger } from "winston";

const REPO_OWNER = "pedritobata";
const REPO_NAME = "my-git-history";

@Service()
export default class GithubOperations {
  private logger: Logger = Container.get(config.dependencyInjection.logger);

  public async getCommitListByOwnerAndRepoAndBranch(
    owner: string,
    repoName: string,
    branch: string = "master"
  ) {
    const axios: AxiosInstance = Container.get(
      config.dependencyInjection.axios
    );
    const url = getCommitListConfig(owner, repoName).endpointUrl;
    const axiosConfig: AxiosRequestConfig = { params: { sha: branch } };
    let data = null;
    try {
      const response = await axios.get(url, axiosConfig);
      data = response.data;
    } catch (error) {
      this.logger.error(error);
      throw new Error(`Github commits API failed: ${error}`);
    }

    return data;
  }


  

}
