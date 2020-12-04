import GitUserService from "../gitUserService";
import Container, { Service } from "typedi";
import GithubUserOperations from "../../integration/github/userOperations";
import userResponseMapper from "../../api/response/mappers/userResponseMapper";
import { Logger } from "winston";
import config from "../../config";
import GihubUser from "../../interfaces/githubUser";
import UserResponse from '../../api/response/interfaces/userResponse';

@Service()
export default class GitUserServiceImpl implements GitUserService {
  private githubUserOperations = Container.get(GithubUserOperations);
  private logger: Logger = Container.get(config.dependencyInjection.logger);

  public async getUserByNickname(
    nickName: string,
  ) : Promise<UserResponse>{
    if(!nickName || nickName === ''){//if no reponame is provided return error
      throw new Error("No username provided.");
    }

    const responseUser: GihubUser = <GihubUser>await this.githubUserOperations.getUserbyNickname(
        nickName
    );
    
    this.logger.info(`User retrieved: ${responseUser.login}.`);

    return userResponseMapper(responseUser);
  }
}
