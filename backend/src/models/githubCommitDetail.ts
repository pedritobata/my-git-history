import IGithubUser from '../interfaces/githubUser';

export default class GithubCommitDetail {
    constructor(public author: IGithubUser,
        public committer: IGithubUser,
        public message: string,
        public tree?: object,
        public url?: string,
        public comment_count?: number,
        public verification?: object){

    }


}