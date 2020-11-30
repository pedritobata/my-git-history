import CommitListResponse from "../api/response/interfaces/commitListResponse";

export default interface GitService {
  getCommitListByOwnerAndRepoAndBranch(
    owner: string,
    reponame: string,
    branch: string
  ): Promise<CommitListResponse | null>;
}
