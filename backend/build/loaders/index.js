"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("./express"));
const dependencyInjector_1 = __importDefault(require("./dependencyInjector"));
/**
 * This object exports the loaders necessary to run the middlewares needed by the express server
 */
exports.default = (app) => {
    dependencyInjector_1.default();
    express_1.default(app);
};
