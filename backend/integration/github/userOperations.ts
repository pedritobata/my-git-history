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

  /**
   * This method fetches the user registered for a specific nickname by invoking the Github API
   * @param nickName 
   */
  public async getUserbyNickname(
    nickName: string,
  ) {
    let data = {};
      const response = await this.axios(<AxiosRequestConfig>getUserConfig(nickName))
      .catch(err => this.logger.error("Failed fetching user operation >>>>", err));
      if(response.data){
        data = response.data; 
      }

    return data;
  }


}
