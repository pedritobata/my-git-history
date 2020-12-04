"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gitRepoController_1 = require("../../controllers/gitRepoController");
exports.default = (app) => {
    app.use("/github-repos", app); //prefix
    app.get("/:owner/:reponame/commits", gitRepoController_1.getCommitListController);
};
