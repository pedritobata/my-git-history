import CommitList from './commitList';

export default interface CommitsState {
    commitList: CommitList;
    loading: boolean;
    error: string;
}