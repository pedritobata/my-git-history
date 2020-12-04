"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GithubCommitDetail {
    constructor(author, committer, message, tree, url, comment_count, verification) {
        this.author = author;
        this.committer = committer;
        this.message = message;
        this.tree = tree;
        this.url = url;
        this.comment_count = comment_count;
        this.verification = verification;
    }
}
exports.default = GithubCommitDetail;
