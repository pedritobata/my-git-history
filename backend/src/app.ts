import "reflect-metadata";
import express = require("express");
import config from "./config";
import loaders from "./loaders";
import { Container } from 'typedi';
import { Logger } from "winston";

function startServer() {
  const app = express();
  loaders(app);
  
  const logger = Container.get(config.dependencyInjection.logger) as Logger;
  
  app
    .listen(config.port, () => {
      logger.info(
        `########### Server listening on port: ${config.port} ############`
      );
    })
    .on("error", (err) => {
      logger.error(err);
      process.exit(1);
    });
}

startServer();
