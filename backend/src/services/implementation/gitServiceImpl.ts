import CommitListResponse from "../../api/response/interfaces/commitListResponse";
import GitService from "../gitService";
import Container, { Service } from 'typedi';
import GithubOperations from '../../integration/github/operations';

@Service()
export default class GitServiceImpl implements GitService{


    private githubOperations = Container.get(GithubOperations);
    

    public async getCommitListByOwnerAndRepoAndBranch(
        owner: string, 
        reponame: string, 
        branch: string) : Promise<CommitListResponse | null>{
        const commitListResponse = await this.githubOperations.getCommitListByOwnerAndRepoAndBranch(owner, reponame, branch);
        if(!commitListResponse || commitListResponse.length === 0){
            throw new Error('No commits found for this repo');
        }
        return commitListResponse;
    }
}