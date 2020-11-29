import { Router } from 'express';

const route = Router();

export default (app: Router) => {
    route.use("/git", app); //prefix

    
}