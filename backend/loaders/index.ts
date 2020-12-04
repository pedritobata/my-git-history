import expressLoader from "./express";
import dependencyInjectorLoader from "./dependencyInjector";

/**
 * This object exports the loaders necessary to run the middlewares needed by the express server
 */
export default (app) => {
  dependencyInjectorLoader();
  expressLoader(app);
};
