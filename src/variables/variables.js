import dotEnv from 'dotenv';

dotEnv.config()

export const {

    APP_PORT,
    DB,
    NODE_ENV
    
} = process.env;

export const IN_PROD = NODE_ENV === 'production';
