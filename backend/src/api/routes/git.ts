import { Router } from 'express';

const route = Router();

export default (app: Router) => {
    route.use("/github-repos", app); //prefix

    route.get("/:owner/:reponame/commits");
}