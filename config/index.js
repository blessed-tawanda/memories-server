import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || '0000';
export const serviceName = process.env.SERVICE_NAME ? process.env.SERVICE_NAME : "";
export const databaseUrl = process.env.DATABASE_URL;
export const serviceUrl = process.env.SERVICE_URL;

