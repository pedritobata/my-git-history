"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GithubCommitItem {
    constructor(commit, author, committer, sha, node_id, url, html_url, comments_url, parents) {
        this.commit = commit;
        this.author = author;
        this.committer = committer;
        this.sha = sha;
        this.node_id = node_id;
        this.url = url;
        this.html_url = html_url;
        this.comments_url = comments_url;
        this.parents = parents;
    }
}
exports.default = GithubCommitItem;
