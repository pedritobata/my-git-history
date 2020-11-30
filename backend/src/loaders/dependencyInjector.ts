import { Container } from 'typedi';
import axios from 'axios';
import Logger from '../utils/logger';
import config from '../config';
import GitServiceImpl from '../services/implementation/gitServiceImpl';

export default function(){
    Container.set(config.dependencyInjection.axios, axios);
    Container.set(config.dependencyInjection.logger, Logger);
}
