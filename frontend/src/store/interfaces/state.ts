import CommitsState from './commitsState';
import UserState from './userState';

export default interface State {
  commits: CommitsState;
  user: UserState
}