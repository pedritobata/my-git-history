import cors = require("cors");
<<<<<<< HEAD:backend/src/loaders/express.ts
import path = require('path');
=======
import path = require("path");
>>>>>>> feature/testing:backend/loaders/express.ts
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


  const __dirname = path.resolve();
  /**
<<<<<<< HEAD:backend/src/loaders/express.ts
   * Production config
=======
   * Production
>>>>>>> feature/testing:backend/loaders/express.ts
   */
  if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/frontend/build')));

<<<<<<< HEAD:backend/src/loaders/express.ts
    app.get('*', (req,res) => 
      res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    )
  } else {
    app.get("/", (req, res) => {
      res.status(200).json({ message: "App is running..." });
=======
    app.get('*', (req,res)=>res.sendFile(path.resolve(__dirname,'frontend','build','index.html')));
  } else {
    app.get("/", (req, res) => {
      res.status(200).json({ message: "App Backend running running..." });
>>>>>>> feature/testing:backend/loaders/express.ts
    });
  }


<<<<<<< HEAD:backend/src/loaders/express.ts
=======

>>>>>>> feature/testing:backend/loaders/express.ts
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
    res.status(err["status"] || 500);
    const Logger = Container.get(config.dependencyInjection.logger) as Logger;
    Logger.error(err);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
};
