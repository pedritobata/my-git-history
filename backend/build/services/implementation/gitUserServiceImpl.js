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
const userOperations_1 = __importDefault(require("../../integration/github/userOperations"));
const userResponseMapper_1 = __importDefault(require("../../api/response/mappers/userResponseMapper"));
const config_1 = __importDefault(require("../../config"));
let GitUserServiceImpl = class GitUserServiceImpl {
    constructor() {
        this.githubUserOperations = typedi_1.default.get(userOperations_1.default);
        this.logger = typedi_1.default.get(config_1.default.dependencyInjection.logger);
    }
    async getUserByNickname(nickName) {
        if (!nickName || nickName === '') { //if no reponame is provided return error
            throw new Error("No username provided.");
        }
        const responseUser = await this.githubUserOperations.getUserbyNickname(nickName);
        this.logger.info(`User retrieved: ${responseUser.login}.`);
        return userResponseMapper_1.default(responseUser);
    }
};
GitUserServiceImpl = __decorate([
    typedi_1.Service()
], GitUserServiceImpl);
exports.default = GitUserServiceImpl;
