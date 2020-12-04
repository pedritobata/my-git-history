import { config, format, createLogger, transports } from "winston";
import configuration from "../config";

const transportsArray = [];
if (process.env.NODE_ENV !== "development") {
  transportsArray.push(new transports.Console());
} else {
  transportsArray.push(
    new transports.Console({
      format: format.combine(format.cli(), format.splat()),
    })
  );
}

const LoggerInstance = createLogger({
  level: configuration.logs.level,
  levels: config.npm.levels,
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  transports: transportsArray,
});

export default LoggerInstance;
