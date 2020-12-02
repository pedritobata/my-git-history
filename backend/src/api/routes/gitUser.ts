import { Router } from "express";
import { getUserController } from "../../controllers/gitUserController";

export default (app: Router) => {
  app.use("/github-users", app); //prefix

  app.get("/:nickname", getUserController);
};
