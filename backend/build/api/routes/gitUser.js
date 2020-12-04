"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gitUserController_1 = require("../../controllers/gitUserController");
exports.default = (app) => {
    app.use("/github-users", app); //prefix
    app.get("/:nickname", gitUserController_1.getUserController);
};
