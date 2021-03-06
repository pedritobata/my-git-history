import dotenv = require("dotenv");

const foundEnv = dotenv.config();
if (foundEnv.error) {
  throw new Error("env file not found.");
}
/**
 * This object contains all of the main global constants needed for the app
 */
export default {
  port: parseInt(process.env.PORT as string, 10) || 5000,

  logs: {
    level: process.env.LOG_LEVEL || "silly",
  },

  dependencyInjection: {
    logger: "Logger",
    axios: "axios",
  },

  api: {
    prefix: "/api",
  },
};
