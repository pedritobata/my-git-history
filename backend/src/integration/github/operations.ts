import { getCommitListConfig } from './config';
import { Container } from 'typedi';
import config from '../../config';
import { AxiosInstance } from 'axios';


const REPO_OWNER = "pedritobata";
const REPO_NAME = "my-git-history";

export default class GithubOperations {

    public static getCommitListByOwnerAndRepo(owner: string, repoName: string){
        const axios: AxiosInstance = Container.get(config.dependencyInjection.axios);
        const url = getCommitListConfig(owner, repoName).endpointUrl;
        const response = axios.get(url);

        return response;
    }

}
