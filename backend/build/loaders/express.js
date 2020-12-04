"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
const path = require("path");
const express = require("express");
const api_1 = __importDefault(require("../api"));
const config_1 = __importDefault(require("../config"));
const typedi_1 = require("typedi");
const morgan = require("morgan");
exports.default = (app) => {
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
    app.use(config_1.default.api.prefix, api_1.default());
    const __dirname = path.resolve();
    /**
     * Production
     */
    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '/frontend/build')));
        app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')));
    }
    else {
        app.get("/", (req, res) => {
            res.status(200).json({ message: "App Backend running running..." });
        });
    }
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
        res.status(err["status"] || 500);
        const Logger = typedi_1.Container.get(config_1.default.dependencyInjection.logger);
        Logger.error(err);
        res.json({
            errors: {
                message: err.message,
            },
        });
    });
};
