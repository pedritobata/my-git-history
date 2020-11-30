import { Router } from "express";
import gitRoutes from "./routes/git";

export default () => {
  const router = Router();
  gitRoutes(router);

  return router;
};
