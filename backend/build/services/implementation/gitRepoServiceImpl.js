"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = __importStar(require("typedi"));
const repoOperations_1 = __importDefault(require("../../integration/github/repoOperations"));
const commitListResponseMapper_1 = __importDefault(require("../../api/response/mappers/commitListResponseMapper"));
const config_1 = __importDefault(require("../../config"));
let GitRepoServiceImpl = class GitRepoServiceImpl {
    constructor() {
        this.githubRepoOperations = typedi_1.default.get(repoOperations_1.default);
        this.logger = typedi_1.default.get(config_1.default.dependencyInjection.logger);
    }
    async getCommitListByOwnerAndRepoAndBranch(owner, reponame, branch) {
        const responseRepoList = await this.githubRepoOperations.getReposByOwner(owner);
        if (reponame === 'xxx' && responseRepoList.length > 0) { //if no reponame is provided, assign the first repo fetched from API
            reponame = responseRepoList[0].name;
        }
        this.logger.info(`Repo List retrieved contains ${responseRepoList.length} elements.`);
        const responseCommitList = await this.githubRepoOperations.getCommitListByOwnerAndRepoAndBranch(owner, reponame, branch);
        this.logger.info(`Commit List retrieved contains ${responseCommitList.length} elements.`);
        const responseBranchList = await this.githubRepoOperations.getBranchesByOwnerAndRepo(owner, reponame);
        this.logger.info(`Branch List retrieved contains ${responseBranchList.length} elements.`);
        const additionalInfo = { branch, reponame };
        return commitListResponseMapper_1.default(additionalInfo, responseCommitList, responseBranchList, responseRepoList);
    }
};
GitRepoServiceImpl = __decorate([
    typedi_1.Service()
], GitRepoServiceImpl);
exports.default = GitRepoServiceImpl;
