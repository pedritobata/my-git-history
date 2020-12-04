"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../../utils/utils");
const commitResponse_1 = __importDefault(require("../interfaces/commitResponse"));
/**
 * This function builds the final response for the commitList service
 * @param additionalInfo - fields that are not part of an entity
 * @param commitList
 * @param branchList
 * @param repoList
 */
function default_1(additionalInfo, commitList, branchList, repoList) {
    var _a;
    if (commitList.length === 0 || branchList.length === 0 || repoList.length === 0) {
        return {};
    }
    const response = {
        repoName: utils_1.getRepoNameFromUrl(commitList[0].url),
        repoOwnerNickname: (_a = commitList[0].author) === null || _a === void 0 ? void 0 : _a.login,
        branch: additionalInfo.branch,
        commitList: mapCommitList(commitList),
        branches: mapBranchList(branchList, additionalInfo.branch),
        repos: mapRepoList(repoList, additionalInfo.reponame),
    };
    return response;
}
exports.default = default_1;
function mapCommitList(commitList) {
    return commitList.map((item) => {
        var _a, _b, _c, _d, _e, _f, _g;
        return commitResponse_1.default.builder()
            .setCommitDate((_a = item.commit) === null || _a === void 0 ? void 0 : _a.author.date)
            .setCommitHtmlRepoSnapshotUrl((_b = item.commit) === null || _b === void 0 ? void 0 : _b.tree.url)
            .setCommitHtmlUrl(item.html_url)
            .setCommitMessage((_c = item.commit) === null || _c === void 0 ? void 0 : _c.message)
            .setCommitterAvatarUrl((_d = item.committer) === null || _d === void 0 ? void 0 : _d.avatar_url)
            .setCommitterEmail((_e = item.commit) === null || _e === void 0 ? void 0 : _e.committer.email)
            .setCommitterName((_f = item.commit) === null || _f === void 0 ? void 0 : _f.committer.name)
            .setCommitterNickname((_g = item.committer) === null || _g === void 0 ? void 0 : _g.login)
            .build();
    });
}
function mapBranchList(branchList, currentBranch) {
    return branchList.filter(item => item.name !== currentBranch).map((item) => item.name);
}
function mapRepoList(repoList, reponame) {
    return repoList.filter(item => item.name !== reponame).map((item) => {
        var _a, _b, _c, _d;
        return {
            name: (_a = item) === null || _a === void 0 ? void 0 : _a.name,
            html_url: (_b = item) === null || _b === void 0 ? void 0 : _b.html_url,
            description: (_c = item) === null || _c === void 0 ? void 0 : _c.description,
            language: (_d = item) === null || _d === void 0 ? void 0 : _d.language
        };
    });
}
