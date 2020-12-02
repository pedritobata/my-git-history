

export default interface Commit {
  authorName: string,
  committerName: string;
  committerNickname: string;
  committerAvatarUrl: string;
  authorAvatarUrl: string;
  committerEmail: string;
  commitMessage: string;
  commitHtmlUrl: string;
  commitHtmlRepoSnapshotUrl: string;
  commitDate: string;
}
