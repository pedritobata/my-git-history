import CommitsState from './commitsState';
import User from './user';

export default interface State {
  commits: CommitsState;
  user: User
}