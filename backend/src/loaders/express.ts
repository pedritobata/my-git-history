import cors from 'cors';
import express from 'express';
import routes from '../api';
import config from '../config';
import dotenv from 'dotenv';




export default (app: express.Application) => {

    const foundEnv = dotenv.config();
    if(foundEnv.error){
        throw new Error("env file not found.");
    }

    app.use(cors());

    /**
     * Health check
     */
   app.get("/status", (req,res) => {
       res.status(200).end();
   });

   /**
    * Config
    */
    app.use(express.json());


    /**
     * Routes
     */
    app.use(config.api.prefix, routes());


    /**
     * Resource not found
     */
    app.use((req,res,next) => {
        const error = new Error("Resource not found");
        error['status'] = 404;
        next(error);
    });


    /**
     * Error handlers
     */
    app.use((err,req,res,next) => {
        res.status(err.status || 500);
        res.json({
            errors: {
                message: err.message,
            }
        });
    });

}
