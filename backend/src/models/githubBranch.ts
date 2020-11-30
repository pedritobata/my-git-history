type Commit = { sha: string; url: string };

export default class Branch {
  constructor(public name: string, public commit: Commit) {}
}
