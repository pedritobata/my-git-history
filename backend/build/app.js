"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express = require("express");
const config_1 = __importDefault(require("./config"));
const loaders_1 = __importDefault(require("./loaders"));
const typedi_1 = require("typedi");
function startServer() {
    const app = express();
    loaders_1.default(app);
    const logger = typedi_1.Container.get(config_1.default.dependencyInjection.logger);
    app
        .listen(config_1.default.port, () => {
        logger.info(`########### Server listening on port: ${config_1.default.port} ############`);
    })
        .on("error", (err) => {
        logger.error(err);
        process.exit(1);
    });
}
startServer();
