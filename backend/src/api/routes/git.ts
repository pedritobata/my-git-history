import { Router } from "express";
import { getCommitListController } from "../../controllers/gitController";

export default (app: Router) => {
  app.use("/github-repos", app); //prefix

  app.get("/:owner/:reponame/commits", getCommitListController);
};
