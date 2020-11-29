import GithubCommitDetail from './githubCommitDetail';

export default class GithubCommitItem {
    constructor(
        public commit: GithubCommitDetail,
        public author: object,
        public committer: object,
        public sha?: string, 
        public node_id?: string, 
        public url?: string,
        public html_url?: string,
        public comments_url?: string,
        public parents?: object[]
        ){

    }

    
}