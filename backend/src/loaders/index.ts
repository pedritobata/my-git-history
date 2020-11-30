import expressLoader from "./express";
import dependencyInjectorLoader from "./dependencyInjector";

export default (app) => {
  dependencyInjectorLoader();
  expressLoader(app);
};
