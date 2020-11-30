import { Tree } from '../interfaces/commit';
import GithubUser from '../interfaces/githubUser';

export default class GithubCommitDetail {
    constructor(
        public author: GithubUser,
        public committer: GithubUser,
        public message: string,
        public tree: Tree,
        public url: string,
        public comment_count?: number,
        public verification?: object){

    }


}