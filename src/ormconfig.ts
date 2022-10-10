import { ConnectionOptions } from 'typeorm';
require('dotenv').config();


// dotenv.config({ path: "../env" });

console.log("process.env.PASSWORD",process.env.PASSWORD)
const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.HOST,
  port: +process.env.PORT,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export default config;
