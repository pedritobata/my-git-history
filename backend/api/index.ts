import { Router } from "express";
import gitRepo from "./routes/gitRepo";
import gitUser from "./routes/gitUser";

export default () => {
  const router = Router();
  gitRepo(router);
  gitUser(router);

  return router;
};
