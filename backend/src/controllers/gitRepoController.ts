import { Request, Response } from "express";
import { Container } from "typedi";
import GitRepoServiceImpl from "../services/implementation/gitRepoServiceImpl";
import CommitListResponse from '../api/response/interfaces/commitListResponse';

/**
 * This method returns a middleware which takes care of endpoint /github-repos/:owner/:reponame/commits
 * @param req 
 * @param res 
 */
export const getCommitListController = async (req: Request, res: Response) => {
  const owner = req.params.owner;
  const repo = req.params.reponame;
  const branch = req.query.sha as string;
  const gitRepoService = Container.get(GitRepoServiceImpl);
  const response: CommitListResponse | {} = await gitRepoService.getCommitListByOwnerAndRepoAndBranch(
    owner,
    repo,
    branch
  );
  res.status(200).json(response);
};
