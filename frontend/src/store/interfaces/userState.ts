import User from './user';

export default interface UserState {
    user: User;
    loading: boolean;
    error: string;
}