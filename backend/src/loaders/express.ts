import cors = require("cors");
import express = require("express");
import routes from "../api";
import config from "../config";
import { Container } from "typedi";
import { Logger } from "winston";
import morgan = require("morgan");

export default (app: express.Application) => {
  app.use(cors());
  app.use(morgan());

  /**
   * Health check
   */
  app.get("/status", (req, res) => {
    res.status(200).json({ message: "Server up and running..." });
  });

  /**
   * Config
   */
  app.use(express.json());

  /**
   * Routes
   */
  app.use(config.api.prefix, routes());

  /**
   * Resource not found. No matching route
   */
  app.use((req, res, next) => {
    const error = new Error("Resource not found");
    error["status"] = 404;
    next(error);
  });

  /**
   * Error handlers
   */
  app.use((err: Error, req: express.Request, res: express.Response, next) => {
    res.status(err.status || 500);
    const Logger = Container.get(config.dependencyInjection.logger) as Logger;
    Logger.error(err);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
};
