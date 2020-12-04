type Commit = { sha: string; url: string };

export default class GithubBranch {
  constructor(public name: string, public commit: Commit) {}
}
