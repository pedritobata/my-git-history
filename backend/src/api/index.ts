import { Router } from 'express';
import git from './routes/git';


export default () => {
    const router = Router();
    git(router);

    
    return router;

}