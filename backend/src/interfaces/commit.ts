import GithubUser from './githubUser';

export default interface ICommit {
    author: GithubUser;
    committer: GithubUser;
    message: string;
}