"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommitResponse {
    constructor(committerName, committerNickname, committerAvatarUrl, committerEmail, commitMessage, commitHtmlUrl, commitHtmlRepoSnapshotUrl, commitDate) {
        this.committerName = committerName;
        this.committerNickname = committerNickname;
        this.committerAvatarUrl = committerAvatarUrl;
        this.committerEmail = committerEmail;
        this.commitMessage = commitMessage;
        this.commitHtmlUrl = commitHtmlUrl;
        this.commitHtmlRepoSnapshotUrl = commitHtmlRepoSnapshotUrl;
        this.commitDate = commitDate;
    }
    setCommitterName(committerName) {
        this.committerName = committerName;
        return this;
    }
    setCommitterNickname(committerNickname) {
        this.committerNickname = committerNickname;
        return this;
    }
    setCommitterAvatarUrl(committerAvatarUrl) {
        this.committerAvatarUrl = committerAvatarUrl;
        return this;
    }
    setCommitterEmail(committerEmail) {
        this.committerEmail = committerEmail;
        return this;
    }
    setCommitMessage(commitMessage) {
        this.commitMessage = commitMessage;
        return this;
    }
    setCommitHtmlUrl(commitHtmlUrl) {
        this.commitHtmlUrl = commitHtmlUrl;
        return this;
    }
    setCommitHtmlRepoSnapshotUrl(commitHtmlRepoSnapshotUrl) {
        this.commitHtmlRepoSnapshotUrl = commitHtmlRepoSnapshotUrl;
        return this;
    }
    setCommitDate(commitDate) {
        this.commitDate = commitDate;
        return this;
    }
    build() {
        return this;
    }
}
exports.default = CommitResponse;
CommitResponse.builder = () => {
    return new CommitResponse("", "", "", "", "", "", "", "");
};
