"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const typedi_1 = require("typedi");
const config_2 = __importDefault(require("../../config"));
let GithubRepoOperations = class GithubRepoOperations {
    constructor() {
        this.logger = typedi_1.Container.get(config_2.default.dependencyInjection.logger);
        this.axios = typedi_1.Container.get(config_2.default.dependencyInjection.axios);
    }
    /**
     * This method fetches the commits registered for a specific owner, repo and branch by invoking the Github API
     * @param owner - username in github
     * @param repoName - name of the desired repo
     * @param branch - name of the desired branch
     */
    async getCommitListByOwnerAndRepoAndBranch(owner, repoName, branch = "master") {
        let data = [];
        const response = await this.axios(config_1.getCommitListConfig(owner, repoName, branch)).catch((err) => this.logger.error("Fetching Commit list operation Failed >>>", err));
        if (response.data) {
            data = response.data;
        }
        return data;
    }
    /**
     * This method fetches the branches registered for a specific owner and repo by invoking the Github API
     * @param owner
     * @param repo
     */
    async getBranchesByOwnerAndRepo(owner, repo) {
        let data = [];
        const response = await this.axios(config_1.getBranchesConfig(owner, repo)).catch((err) => this.logger.error("Fetching Branches operation Failed >>>", err));
        if (response.data) {
            data = response.data;
        }
        return data;
    }
    /**
     * This method fetches the repos registered for a specific owner by invoking the Github API
     * @param owner
     */
    async getReposByOwner(owner) {
        let data = [];
        const response = await this.axios(config_1.getReposConfig(owner)).catch((err) => this.logger.error("Fetching Repos operation Failed >>>", err));
        if (response.data) {
            data = response.data;
        }
        return data;
    }
};
GithubRepoOperations = __decorate([
    typedi_1.Service()
], GithubRepoOperations);
exports.default = GithubRepoOperations;
