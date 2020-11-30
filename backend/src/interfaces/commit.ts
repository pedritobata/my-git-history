import GithubUser from './githubUser';

export type Tree = { sha: string; url: string};

export default interface Commit {
    author: GithubUser;
    committer: GithubUser;
    message: string;
    tree: Tree;
}