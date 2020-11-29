import express = require("express");
import config from "./config";
import loaders from "./loaders";
import { Container } from 'typedi';
import ILogger from './interfaces/ILogger';

function startServer() {
  const app = express();

  const Logger: ILogger = Container.get(config.dependencyInjection.logger);

  loaders(app);

  
  app
    .listen(config.port, () => {
      Logger.info(
        `########### Server listening on port: ${config.port} ############`
      );
    })
    .on("error", (err) => {
      Logger.error(err);
      process.exit(1);
    });
}

startServer();
