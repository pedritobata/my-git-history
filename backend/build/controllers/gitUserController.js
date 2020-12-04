"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const gitUserServiceImpl_1 = __importDefault(require("../services/implementation/gitUserServiceImpl"));
/**
 * This method returns a middleware which takes care of endpoint /github-users/:nickname
 * @param req
 * @param res
 */
exports.getUserController = async (req, res) => {
    const nickname = req.params.nickname;
    const gitUserService = typedi_1.Container.get(gitUserServiceImpl_1.default);
    const response = await gitUserService.getUserByNickname(nickname);
    res.status(200).json(response);
};
