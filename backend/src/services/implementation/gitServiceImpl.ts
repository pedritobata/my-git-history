import CommitListResponse from "../../api/response/interfaces/commitListResponse";
import GitService from "../gitService";
import { Service } from 'typedi';

@Service()
export default class GitServiceImpl implements GitService{

    public getCommitListByOwnerAndRepo(owner: string, reponame: string) : CommitListResponse | null {
         

        return null;
    }
}