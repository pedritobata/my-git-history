
export default class CommitResponse {
  private constructor(
    private committerName: string,
    private committerNickname: string,
    private committerAvatarUrl: string,
    private committerEmail: string,
    private commitMessage: string,
    private commitHtmlUrl: string,
    private commitHtmlRepoSnapshotUrl: string,
    private commitDate: string
  ) {}

  public static builder = () => {
    return new CommitResponse("", "", "", "", "", "", "", "");
  };

  public setCommitterName(committerName: string): CommitResponse {
    this.committerName = committerName;
    return this;
  }

  public setCommitterNickname(committerNickname: string): CommitResponse {
    this.committerNickname = committerNickname;
    return this;
  }

  public setCommitterAvatarUrl(committerAvatarUrl: string): CommitResponse {
    this.committerAvatarUrl = committerAvatarUrl;
    return this;
  }

  public setCommitterEmail(committerEmail: string): CommitResponse {
    this.committerEmail = committerEmail;
    return this;
  }

  public setCommitMessage(commitMessage: string): CommitResponse {
    this.commitMessage = commitMessage;
    return this;
  }

  public setCommitHtmlUrl(commitHtmlUrl: string): CommitResponse {
    this.commitHtmlUrl = commitHtmlUrl;
    return this;
  }

  public setCommitHtmlRepoSnapshotUrl(
    commitHtmlRepoSnapshotUrl: string
  ): CommitResponse {
    this.commitHtmlRepoSnapshotUrl = commitHtmlRepoSnapshotUrl;
    return this;
  }

  public setCommitDate(commitDate: string): CommitResponse {
    this.commitDate = commitDate;
    return this;
  }

  public build(): CommitResponse {
    return this;
  }
}
