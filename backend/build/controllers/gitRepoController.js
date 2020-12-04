"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const gitRepoServiceImpl_1 = __importDefault(require("../services/implementation/gitRepoServiceImpl"));
/**
 * This method returns a middleware which takes care of endpoint /github-repos/:owner/:reponame/commits
 * @param req
 * @param res
 */
exports.getCommitListController = async (req, res) => {
    const owner = req.params.owner;
    const repo = req.params.reponame;
    const branch = req.query.sha;
    const gitRepoService = typedi_1.Container.get(gitRepoServiceImpl_1.default);
    const response = await gitRepoService.getCommitListByOwnerAndRepoAndBranch(owner, repo, branch);
    res.status(200).json(response);
};
