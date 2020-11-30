import { Request, Response } from 'express';
import { Container } from 'typedi';
import GitServiceImpl from '../services/implementation/gitServiceImpl';

export const getCommitListController = (req: Request, res: Response) => {
    const owner = req.params.owner;
    const repo = req.params.reponame;
    const gitService = Container.get(GitServiceImpl);
    const response = gitService.getCommitListByOwnerAndRepo(owner, repo);
    res.json(response);
}