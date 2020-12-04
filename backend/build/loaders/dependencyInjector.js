"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const axios_1 = __importDefault(require("axios"));
const logger_1 = __importDefault(require("../utils/logger"));
const config_1 = __importDefault(require("../config"));
function default_1() {
    typedi_1.Container.set(config_1.default.dependencyInjection.axios, axios_1.default);
    typedi_1.Container.set(config_1.default.dependencyInjection.logger, logger_1.default);
}
exports.default = default_1;
