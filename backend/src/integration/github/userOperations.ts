import { getUserConfig } from "./config";
import { Container, Service } from "typedi";
import config from "../../config";
import { AxiosInstance, AxiosRequestConfig } from "axios";
import { Logger } from "winston";

@Service()
export default class GithubUserOperations {
  private logger: Logger = Container.get(config.dependencyInjection.logger);
  private axios: AxiosInstance = Container.get(
    config.dependencyInjection.axios
  );

  public async getUserbyNickname(
    nickName: string,
  ) {
    let data = null;
    try {
      const response = await this.axios(<AxiosRequestConfig>getUserConfig(nickName));
      data = response.data;
    } catch (error) {
      this.logger.error(error);
      throw new Error(`Github users API operation failed: ${error}`);
    }

    return data;
  }


}
