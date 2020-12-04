"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const basic = require("basic-authorization-header");
exports.getUserConfig = (nickname) => {
    return {
        method: 'GET',
        url: `https://api.github.com/users/${nickname}`,
        headers: {
            Authorization: basic(process.env.CLIENT_ID, process.env.CLIENT_SECRET),
            "Content-Type": "application/x-www-form-urlencoded"
        },
    };
};
exports.getCommitListConfig = (ownerNickname, repoName, branch) => {
    return {
        method: 'GET',
        url: `https://api.github.com/repos/${ownerNickname}/${repoName}/commits`,
        headers: {
            Authorization: basic(process.env.CLIENT_ID, process.env.CLIENT_SECRET),
            "Content-Type": "application/x-www-form-urlencoded"
        },
        params: { sha: branch }
    };
};
exports.getBranchesConfig = (owner, reponame) => {
    return {
        method: 'GET',
        url: `https://api.github.com/repos/${owner}/${reponame}/branches`,
        headers: {
            Authorization: basic(process.env.CLIENT_ID, process.env.CLIENT_SECRET),
            "Content-Type": "application/x-www-form-urlencoded"
        }
    };
};
exports.getReposConfig = (owner) => {
    return {
        method: 'GET',
        url: `https://api.github.com/users/${owner}/repos`,
        headers: {
            Authorization: basic(process.env.CLIENT_ID, process.env.CLIENT_SECRET),
            "Content-Type": "application/x-www-form-urlencoded"
        }
    };
};
