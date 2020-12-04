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
let GithubUserOperations = class GithubUserOperations {
    constructor() {
        this.logger = typedi_1.Container.get(config_2.default.dependencyInjection.logger);
        this.axios = typedi_1.Container.get(config_2.default.dependencyInjection.axios);
    }
    /**
     * This method fetches the user registered for a specific nickname by invoking the Github API
     * @param nickName
     */
    async getUserbyNickname(nickName) {
        let data = {};
        const response = await this.axios(config_1.getUserConfig(nickName))
            .catch(err => this.logger.error("Failed fetching user operation >>>>", err));
        if (response.data) {
            data = response.data;
        }
        return data;
    }
};
GithubUserOperations = __decorate([
    typedi_1.Service()
], GithubUserOperations);
exports.default = GithubUserOperations;
