import cors = require("cors");
import express = require("express");
import routes from "../api";
import config from "../config";

export default (app: express.Application) => {
  app.use(cors());

  /**
   * Health check
   */
  app.get("/status", (req, res) => {
    res.status(200).end();
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
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
};
