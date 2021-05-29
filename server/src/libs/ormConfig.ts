import { ConnectionOptions } from 'typeorm';
import entities from '../entities';

const ConnectionOptions: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_URL,
  port: 5432,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities,
  synchronize: false,
  logging: false,
};

export default ConnectionOptions;
