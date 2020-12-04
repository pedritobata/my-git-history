"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const config_1 = __importDefault(require("../config"));
const transportsArray = [];
if (process.env.NODE_ENV !== "development") {
    transportsArray.push(new winston_1.transports.Console());
}
else {
    transportsArray.push(new winston_1.transports.Console({
        format: winston_1.format.combine(winston_1.format.cli(), winston_1.format.splat()),
    }));
}
const LoggerInstance = winston_1.createLogger({
    level: config_1.default.logs.level,
    levels: winston_1.config.npm.levels,
    format: winston_1.format.combine(winston_1.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
    }), winston_1.format.errors({ stack: true }), winston_1.format.splat(), winston_1.format.json()),
    transports: transportsArray,
});
exports.default = LoggerInstance;
