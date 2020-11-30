import { Request, Response } from 'express';
import { Container } from 'typedi';
import GitServiceImpl from '../services/implementation/gitServiceImpl';

export const getCommitListController = async (req: Request, res: Response) => {
    const owner = req.params.owner;
    const repo = req.params.reponame;
    const branch = req.query.sha as string;
    const gitService = Container.get(GitServiceImpl);
    const response = await gitService.getCommitListByOwnerAndRepoAndBranch(owner, repo, branch);
    res.status(200).json(response);
}