import CommitListResponse from "../api/response/interfaces/commitListResponse";

export default interface GitService {
   getCommitListByOwnerAndRepo(owner: string, reponame: string) : CommitListResponse | null; 
}