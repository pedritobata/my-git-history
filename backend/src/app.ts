import express from 'express';
import config from './config';
import loaders from './loaders';
import Logger from './utils/logger';


const startServer = () => {
    const app = express();

    loaders(app);

    app.listen(config.port, () => {
       Logger.info(`
      ################################################
       Server listening on port: ${config.port} 
      ################################################
    `);
    }).on('error', err => {
    Logger.error(err);
    process.exit(1);
  });
}

startServer();