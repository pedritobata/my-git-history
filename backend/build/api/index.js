"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gitRepo_1 = __importDefault(require("./routes/gitRepo"));
const gitUser_1 = __importDefault(require("./routes/gitUser"));
exports.default = () => {
    const router = express_1.Router();
    gitRepo_1.default(router);
    gitUser_1.default(router);
    return router;
};
